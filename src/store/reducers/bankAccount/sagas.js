import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';

import { getBankAccount, getDetailBankAccount } from '../../../service/bankAccount';

export function* GET_BANK_ACCOUNT() {
  yield put({ type: actions.SET_STATE, payload: { loading: true, dataBankAccount: null }});

  try {
    const { data } = yield getBankAccount();
    
    yield put({ type: actions.SET_STATE, payload: { dataBankAccount: data } });
  } catch ({ message: error }) {
    yield put({ type: actions.SET_STATE, payload: { error } });
  } finally {
    yield put({ type: actions.SET_STATE, payload: { loading: false } });
  }
}

export function* GET_DETAIL_BANK_ACCOUNT(params) {
  yield put({ type: actions.SET_STATE, payload: { loading: true, dataBankAccount: null }});

  try {
    const { data } = yield getDetailBankAccount(params.id);
    
    yield put({ type: actions.SET_STATE, payload: { dataBankAccount: data } });
  } catch ({ message: error }) {
    yield put({ type: actions.SET_STATE, payload: { error } });
  } finally {
    yield put({ type: actions.SET_STATE, payload: { loading: false } });
  }
}

export default function* bankAccountSaga() {
  yield all([
    takeEvery(actions.GET_DATA, GET_BANK_ACCOUNT),
    takeEvery(actions.GET_DATA_DETAIL, GET_DETAIL_BANK_ACCOUNT)
  ]);
}