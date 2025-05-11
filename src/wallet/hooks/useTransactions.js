import { useTransactions } from '@starknet-react/core';

export const useTxNotifications = () => {
  const { transactions } = useTransactions();
  
  return transactions.map(tx => ({
    hash: tx.transactionHash,
    status: tx.status,
    timestamp: tx.lastUpdatedAt
  }));
};

// Connect to provider
const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });

// Your deployed contract address
const contractAddress = "0x...";