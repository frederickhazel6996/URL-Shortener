import HomePage from './Pages/Home/Home';
import ErrorPage from './Pages/Error/Error';
const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/404',
    exact: true,
    name: 'Error',
    component: ErrorPage,
  },
];

export default routes;
