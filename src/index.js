import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StarknetProvider from './wallets/providers/StarknetProvider';

ReactDOM.render(
  <StarknetProvider>
    <App />
  </StarknetProvider>,
  document.getElementById('root')
);
const connectionStatus = {
    'disconnected': 'Disconnected',
    'connecting': 'Connecting...',
    'connected': 'Connected',
    'reconnecting': 'Reconnecting...'
  };
  
  // Then add to return object
  statusMessage: connectionStatus[status]