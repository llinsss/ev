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