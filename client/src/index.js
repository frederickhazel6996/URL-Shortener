import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <Router>
      <ColorModeScript />
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
