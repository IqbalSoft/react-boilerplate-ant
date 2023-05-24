import { lazy } from 'react';

const DefaultRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/HomePage')),
    exact: true
  }
];

export default DefaultRoutes;