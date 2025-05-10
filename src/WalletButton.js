import { useWallet } from '../wallets/hooks/useWallet';

export default function WalletButton() {
  const { 
    connect, 
    connectors, 
    disconnect, 
    shortenedAddress, 
    status 
  } = useWallet();
