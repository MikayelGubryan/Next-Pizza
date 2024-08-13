import axios from 'axios';

export const instance = axios.create({
    baseURL: process.env.Next_Public
});