import { all, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import actions from './actions';

export function* GET_BANK_ACCOUNT() {
  yield put({ type: actions.SET_STATE, payload: { loading: true }});

  try {
    const { data } = axios.get('https://api.sampleapis.com/fakebank/accounts');
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