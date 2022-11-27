import { createSlice } from '@reduxjs/toolkit';
import { userReducers } from './reducers';
import { UserModel, userState } from './state';

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        setUser(state: UserModel, action) {
            return { ...state, user: action.payload };
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
