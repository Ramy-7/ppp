import axiosInstance from './request';


export const request = (username, password) => axiosInstance({
    method: 'POST',
    url: '/login',
    data: {
        username,
        password
    }
}) //缺1119 06 14分