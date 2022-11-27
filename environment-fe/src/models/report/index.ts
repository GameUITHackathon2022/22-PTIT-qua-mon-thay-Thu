import { createSlice } from '@reduxjs/toolkit';
import { Report } from 'services/reportAPI';
import { reportReducers } from './reducers';
import { ReportModel, reportState } from './state';

const reportSlice = createSlice({
    name: 'report',
    initialState: reportState,
    reducers: {
        setReport(state: ReportModel, action) {
            return { ...state, data: action.payload };
        },
        handleResolve(state: ReportModel, action) {
            if (state.data) {
                if ((state.data.status = 'received')) {
                    state.data.status = 'handling';
                } else if ((state.data.status = 'handling')) {
                    state.data.status = 'resolved';
                } else {
                    state.data.status = 'rejected';
                }
            }
        },
    },
});

export const { setReport, handleResolve } = reportSlice.actions;
export default reportSlice.reducer;
