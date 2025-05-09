import { StarknetConfig } from '@starknet-react/core';
import { allConnectors } from '../connectors';

export default function StarknetProvider({ children }) {
  return (
    <StarknetConfig 
      connectors={allConnectors}
      autoConnect={true}
    >
      {children}
    </StarknetConfig>
  );
}