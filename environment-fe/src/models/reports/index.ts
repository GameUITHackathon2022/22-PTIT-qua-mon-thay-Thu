import { createSlice } from '@reduxjs/toolkit';
import { reportsReducers } from './reducers';
import { ReportsModel, reportsState } from './state';

const reportsSlice = createSlice({
    name: 'reports',
    initialState: reportsState,
    reducers: {
        setReports(state: ReportsModel, action) {
            state.data = action.payload;
        },
    },
});

export const { setReports } = reportsSlice.actions;
export default reportsSlice.reducer;
