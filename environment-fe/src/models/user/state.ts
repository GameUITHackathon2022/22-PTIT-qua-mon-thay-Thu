import type { User } from '../../services/userAPI';

export type UserModel = {
    user: User | null;
    isFetching: boolean;
    error: boolean;
};

export const userState = {
    user: null,
    isFetching: false,
    error: false,
};
