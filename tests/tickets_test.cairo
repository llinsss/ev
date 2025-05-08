#[cfg(test)]
mod tests {
    use super::Ticket;
    use starknet::ContractAddress;
    use array::ArrayTrait;
    use option::OptionTrait;
    
    #[test]
    #[available_gas(1000000)]
    fn test_event_creation_and_ticketing() {
        let contract = Ticket::unsafe_new_contract_state();
        let dummy_address: ContractAddress = 12345.try_into().unwrap();
        // Create an event
        let event_id = Ticket::create_event(
            @contract,
            'Concert',
            '2023-12-25',
            'StarkNet Arena',
            100
        );
        
        // Issue a ticket
        let ticket_id = Ticket::issue_ticket(@contract, event_id);
        
        // Verify the ticket
        let is_valid = Ticket::verify_ticket(@contract, ticket_id, event_id);
        assert(is_valid, 'Ticket should be valid');
        
        // Check ticket owner
        let owner = Ticket::get_ticket_owner(@contract, ticket_id);
        assert(owner == dummy_address, 'Owner should match');
        // Check event details
        let event = Ticket::get_event_details(@contract, event_id);
        assert(event.name == 'Concert', 'Event name should match');
        assert(event.max_tickets == 100, 'Max tickets should match');
    }
}
        