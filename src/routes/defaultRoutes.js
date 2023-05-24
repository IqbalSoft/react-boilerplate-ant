import { lazy } from 'react';

const DefaultRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/HomePage')),
    exact: true
  },
  {
    path: '/explore',
    component: lazy(() => import('../pages/ExplorePage')),
    exact: true
  }
];

export default DefaultRoutes;