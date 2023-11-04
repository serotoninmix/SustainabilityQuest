import React from 'react';
import { WagmiConfig, configureChains, chain,createConfig, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import SurveyComponent from './SurveyComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MacBookAir1 from './views/mac-book-air1';
import MacBookAir2 from './views/mac-book-air2';
import MacBookAir11 from './views/mac-book-air11';
import NotFound from './views/not-found';

import { InjectedConnector } from 'wagmi/connectors/injected';

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)

const wagmiClient = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

function App() {
  return (
    <React.StrictMode>
      <WagmiConfig config={wagmiClient}>
        <Router>
          <Switch>
            <Route path="/" exact component={MacBookAir1} />
            <Route path="/" exact component={MacBookAir2} />
            <Route path="/" exact component={MacBookAir11} />
            <Route path="/" exact component={NotFound} />
          </Switch>
        </Router>
        <SurveyComponent /> {/* Included as part of your application */}
      </WagmiConfig>
    </React.StrictMode>
  );
}

export default App;
