import { useAccount, useConnect, useDisconnect } from '@starknet-react/core';

export const useWallet = () => {
  const { connect, connectors, error } = useConnect();
  const { account, address, status } = useAccount();
  const { disconnect } = useDisconnect();

  const shortenedAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  return {
    connect,
    connectors,
    account,
    address,
    shortenedAddress,
    status,
    disconnect,
    error
  };
};