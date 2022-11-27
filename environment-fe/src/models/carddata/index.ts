import { createSlice } from '@reduxjs/toolkit';
const initState = {
    draft: 20,
    resolved: 10,
    handling: 5,
    received: 4,
    rejected: 1,
};
const cardDataSlice = createSlice({
    name: 'carddata',
    initialState: initState,
    reducers: {
        setCardData: (state, action) => {
            console.log('action', action);
            return { ...state, ...action.payload };
        },
    },
});

export const { setCardData } = cardDataSlice.actions;
export default cardDataSlice.reducer;
