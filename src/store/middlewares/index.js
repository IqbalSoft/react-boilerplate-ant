import createSagaMiddleware from "redux-saga";
import sagas from './sagas';

export { sagas };

export const sagaMiddleware = createSagaMiddleware();
// eslint-disable-next-line import/no-anonymous-default-export
export default [sagaMiddleware];
