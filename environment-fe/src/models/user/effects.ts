import { call } from 'redux-saga/effects';
import { userAPI } from 'services/userAPI';

function* loginSaga(action: any) {
    // yield console.log('payload', payload);
    try {
        // const user = yield call(userAPI.login, action.payload);
        yield console.log('user');
    } catch {
        console.log('err');
    }
}

export { loginSaga };
