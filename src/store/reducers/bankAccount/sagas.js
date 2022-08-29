import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';

import { getBankAccount } from '../../../service/bankAccount';

export function* GET_BANK_ACCOUNT() {
  yield put({ type: actions.SET_STATE, payload: { loading: true }});

  try {
    const { data } = yield getBankAccount();
    
    yield put({ type: actions.SET_STATE, payload: { dataBankAccount: data } });
  } catch ({ message: error }) {
    yield put({ type: actions.SET_STATE, payload: { error } });
  } finally {
    yield put({ type: actions.SET_STATE, payload: { loading: false } });
  }
}

export default function* bankAccountSaga() {
  yield all([takeEvery(actions.GET_DATA, GET_BANK_ACCOUNT)]);
}