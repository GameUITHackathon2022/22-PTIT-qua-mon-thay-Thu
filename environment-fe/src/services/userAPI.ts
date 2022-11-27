import axiosClient from './axiosClient';
export type User = {
    id?: number;
    user_name: string;
    pass_word: string;
    email?: string;
    phone?: string;
    is_resolver?: true;
};
export const userAPI = {
    async login(account: User) {
        const url = '/user/login';
        const res = await axiosClient.post(url, account);
        return res;
    },
};
