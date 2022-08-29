import { lazy } from 'react';

const DefaultRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/bankAccount')),
    exact: true
  },
  {
    path: '/bank-account/:id',
    component: lazy(() => import('../pages/bankAccount/detail')),
    exact: true
  }
];

export default DefaultRoutes;