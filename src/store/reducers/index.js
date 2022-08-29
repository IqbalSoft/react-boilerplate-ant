import { combineReducers } from "redux";

import bankAccount from './bankAccount/reducer';

const createRootReducer = () => combineReducers({
  bankAccount
}) ;

export default createRootReducer;