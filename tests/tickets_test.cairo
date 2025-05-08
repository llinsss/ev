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
        