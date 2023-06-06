import { lazy } from 'react';

const DefaultRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/LoginPage')),
    exact: true
  },
];

export default DefaultRoutes;