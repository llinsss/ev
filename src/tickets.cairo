#[starknet::contract]
mod Ticket {
    use starknet::ContractAddress;
    use starknet::get_caller_address;
    use option::OptionTrait;
    use array::ArrayTrait;
    
    #[storage]
    struct Storage {
        // Event ID => Event details
        events: LegacyMap::<u128, Event>,
        // Ticket ID => Owner address
        tickets: LegacyMap::<u128, ContractAddress>,
        // Event ID => Ticket IDs
        event_tickets: LegacyMap::<u128, Array::<u128>>,
        // Counter for ticket IDs
        ticket_counter: u128,
    }
    #[derive(Drop, Serde)]
    struct Event {
        name: felt252,
        date: felt252,
        venue: felt252,
        max_tickets: u128,
        owner: ContractAddress,
    }
    
    #[event]
    #[derive(Drop, Serde)]
    enum Event {
        EventCreated: EventCreated,
        TicketIssued: TicketIssued,
    }
    #[derive(Drop, Serde)]
    struct EventCreated {
        event_id: u128,
        name: felt252,
    }
    
    #[derive(Drop, Serde)]
    struct TicketIssued {
        ticket_id: u128,
        event_id: u128,
        owner: ContractAddress,
    }
    #[external(v0)]
    impl TicketImpl of ITicket {
        fn create_event(
            ref self: ContractState,
            name: felt252,
            date: felt252,
            venue: felt252,
            max_tickets: u128
        ) -> u128 {
            let caller = get_caller_address();
            let event_id = self.events.len();
            
            let event = Event {
                name,
                date,
                venue,
                max_tickets,
                owner: caller,
            };
        };
            
        self.events.write(event_id, event);
        
        self.emit(Event::EventCreated(EventCreated { event_id, name }));
        
        event_id
    }
    
    fn issue_ticket(
        ref self: ContractState,
        event_id: u128
    ) -> u128 {
        let caller = get_caller_address();
        let mut event = self.events.read(event_id);
        // Check if event exists
        assert(event.name != 0, 'Event does not exist');
            
        // Check if there are tickets available
        let tickets_issued = self.event_tickets.read(event_id).len();
        assert(tickets_issued < event.max_tickets, 'No tickets available');
        
        // Create new ticket
        let ticket_id = self.ticket_counter.read();
        self.tickets.write(ticket_id, caller);
        
        // Add ticket to event
        let mut event_tickets = self.event_tickets.read(event_id);
        event_tickets.append(array![ticket_id]);
        self.event_tickets.write(event_id, event_tickets);
        
        // Increment counter
        self.ticket_counter.write(ticket_id + 1);
        self.emit(Event::TicketIssued(TicketIssued {
            ticket_id,
            event_id,
            owner: caller,
        }));
        
        ticket_id
    }
    
    fn verify_ticket(
        ref self: ContractState,
        ticket_id: u128,
        event_id: u128
    ) -> bool {
        let owner = self.tickets.read(ticket_id);
        let event = self.events.read(event_id);
        // Check if ticket exists
        if owner == ContractAddress::default() {
            return false;
        }
        
        // Check if ticket belongs to this event
        let event_tickets = self.event_tickets.read(event_id);
        let mut is_valid = false;
        
        for ticket in event_tickets.iter() {
            if *ticket == ticket_id {
                is_valid = true;
                break;
            }