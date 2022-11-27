import type { Report } from '../../services/reportAPI';

export type ReportModel = {
    data: Report | null;
    isFetching: boolean;
    error: boolean;
};

export const reportState: ReportModel = {
    data: {
        id: 1,
        title: 'con chim non',
        description: 'trên cành cây hót líu lo',
        priority: 1,
        user_name: 'nhontq',
        city: 'TP Ho Chi Minh',
        district: 'Quan 10',
        street: 'Cach Mang T8',
        ward: 'Man Thien',
        address: 'so 5 duong 102',
        lag: 10.782222,
        lng: 106.70278,
    },
    isFetching: false,
    error: false,
};
