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