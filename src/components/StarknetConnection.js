import { useConnect, useAccount } from '@starknet-react/core';

export default function StarknetConnection() {
  const { connect, connectors } = useConnect();
  const { account } = useAccount();

  return (
    <div>
      {!account ? (