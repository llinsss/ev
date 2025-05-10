import { useWallet } from '../wallets/hooks/useWallet';

export default function WalletButton() {
  const { 
    connect, 
    connectors, 
    disconnect, 
    shortenedAddress, 
    status 
  } = useWallet();
  if (status === 'connected') {
    return (
      <button 
        onClick={disconnect}
        className="wallet-btn connected"
      >
        Disconnect ({shortenedAddress})
      </button>
    );
  }
  return (
    <div className="wallet-connectors">
      {connectors.map((connector) => (
        <button
          key={connector.id}
          onClick={() => connect({ connector })}
          className={`wallet-btn ${connector.id}`}
        >
          Connect {connector.name}
        </button>
      ))}
    </div>
  );
}
