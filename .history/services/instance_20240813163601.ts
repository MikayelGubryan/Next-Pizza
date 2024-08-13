import axios from 'axios';

export const instance = axios.create({
    baseURL: 'alhost:3000/apipr'
});