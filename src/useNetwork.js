import { useNetwork } from '@starknet-react/core';

export const useNetwork = () => {
  const { chain } = useNetwork();
  
  return {
    chain,
    isMainnet: chain === 'SN_MAIN',
    isTestnet: chain === 'SN_GOERLI'
  };
};