import axiosClient from './axiosClient';

export type Report = {
    id: number;
    title: string;
    description: string;
    priority: number;
    user_name: string;
    city: string;
    district: string;
    street: string;
    ward: string;
    status?: string;
    address: string;
    lag: number;
    lng: number;
};

export const reportAPI = {
    async getReports() {
        const url = '/report/get_all';
        const res = await axiosClient.get(url);
        return res;
    },
    async uploadFile(file: File) {
        const url = '/report/upload_file';
        const res = await axiosClient.post(url, { image: file });
        console.log('image', res);
        return res;
    },
    async postReport(report: any) {
        const url = '/report/create';
        const res = await axiosClient.post(url, report);
        return res;
    },
};
