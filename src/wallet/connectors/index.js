import { argent, braavos } from '@starknet-react/core';

export const allConnectors = [
  argent({
    dappName: "Event Ticketing App"
  }),
  braavos({
    dappName: "Event Ticketing App"
  })
];

export const defaultConnector = allConnectors[0];