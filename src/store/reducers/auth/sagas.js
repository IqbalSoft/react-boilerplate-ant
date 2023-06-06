import { all, put, takeEvery } from 'redux-saga/effects';
import actions from './actions';

import { getBankAccount } from '../../../service/bankAccount';

export function* POST_LOGIN() {
  yield put({ type: actions.SET_STATE, payload: { loading: true, data_auth: null }});

  try {
    const { data } = yield getBankAccount();
    
    yield put({ type: actions.SET_STATE, payload: { data_auth: data } });
  } catch ({ message: error }) {
    yield put({ type: actions.SET_STATE, payload: { error } });
  } finally {
    yield put({ type: actions.SET_STATE, payload: { loading: false } });
  }
}


export default function* dashboardStaticSaga() {
  yield all([
    takeEvery(actions.POST_AUTH, POST_LOGIN),
  ]);
}