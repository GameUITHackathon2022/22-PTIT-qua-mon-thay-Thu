import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../models/user';
import reportReducer from '../models/report';
import reportsReducer from '../models/reports';
import cardDataReducer from '../models/carddata';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMidleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        user: userReducer,
        report: reportReducer,
        reports: reportsReducer,
        carddata: cardDataReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMidleware),
});

sagaMidleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
