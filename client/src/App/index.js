import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../public.routes';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './index.scss';
const theme = extendTheme({
  colors: {
    button_color: {
      100: '#ffedea',
      200: '#ffcec5',
      300: '#ffad9f',
      400: '#ff8a75',
      500: '#ff5533',
      600: '#e2492d',
      700: '#be3d26',
      800: '#9a311f',
    },
  },
});
function App() {
  const publicRoute = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={props => <route.component {...props} />}
      />
    ) : null;
  });
  return (
    <ChakraProvider theme={theme}>
      <Switch>{publicRoute}</Switch>
    </ChakraProvider>
  );
}

export default App;
