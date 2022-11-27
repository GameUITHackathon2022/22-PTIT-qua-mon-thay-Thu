import { loginSaga } from 'models/user/effects';
import { all, takeLatest } from 'redux-saga/effects';

function* helloSaga() {
    yield console.log('Hello saga');
}
export default function* rootSaga() {
    yield takeLatest('USER_LOGIN', loginSaga);
    // yield all([helloSaga()]);
}
