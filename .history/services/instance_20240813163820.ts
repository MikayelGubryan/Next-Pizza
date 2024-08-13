import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.Next_Public_API_URL
});