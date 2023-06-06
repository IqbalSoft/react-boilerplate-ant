import { all } from 'redux-saga/effects';

import authSaga from '../reducers/auth/sagas';

export default function* rootSaga() {
  yield all([authSaga()]);
}