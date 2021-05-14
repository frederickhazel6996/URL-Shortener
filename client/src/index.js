import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Favicon from 'react-favicon';
import { rocketImageIco } from './Utils/values';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <StrictMode>
    <Router>
      <Favicon url={rocketImageIco} />
      <ColorModeScript />
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
