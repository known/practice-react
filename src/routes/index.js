import Home from './Home';
import Basic from './Basic';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => Home.Sidebar,
    main: () => Home.Main
  },
  {
    path: '/basic',
    sidebar: () => Basic.Sidebar,
    main: () => Basic.Main
  },
];

export default routes;