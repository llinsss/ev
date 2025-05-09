mport React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { connect, disconnect } from 'starknetjs/dist/provider';
import { AccountInterface } from 'starknet';

interface WalletContextType {
  account: AccountInterface | null;
  address: string | null;
  network: string | null;
  isConnecting: boolean;
  error: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isInstalled: boolean;
}

const WalletContext = createContext<WalletContextType>({
  account: null,
  address: null,
  network: null,
  isConnecting: false,
  error: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  isInstalled: false,
});