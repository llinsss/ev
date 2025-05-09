import { useContract as useStarknetContract } from '@starknet-react/core';
import { ticketAbi } from '../../contracts/ticketAbi';

export const useTicketContract = (address) => {
  const { contract } = useStarknetContract({
    abi: ticketAbi,
    address: address
  });

  return {
    contract
  };
};