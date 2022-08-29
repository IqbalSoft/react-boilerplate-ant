import { lazy } from 'react';

const DefaultRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/landing')),
    exact: true
  }
];

export default DefaultRoutes;