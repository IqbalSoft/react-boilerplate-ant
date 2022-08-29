import { all } from 'redux-saga/effects';

import bankAccountSaga from '../reducers/bankAccount/sagas';

export default function* rootSaga() {
  yield all([bankAccountSaga()]);
}