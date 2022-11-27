import { userState } from './state';

export const userReducers = {
    logout: () => {
        localStorage.removeItem('user');
        return {
            ...userState,
        };
    },
};
