import { useTransactions } from '@starknet-react/core';

export const useTxNotifications = () => {
  const { transactions } = useTransactions();
  
  return transactions.map(tx => ({
    hash: tx.transactionHash,
    status: tx.status,
    timestamp: tx.lastUpdatedAt
  }));
};