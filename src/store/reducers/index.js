import { combineReducers } from "redux";

import auth from './auth/reducer';

const createRootReducer = () => combineReducers({
  auth
});

export default createRootReducer;