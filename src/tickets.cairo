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