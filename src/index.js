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