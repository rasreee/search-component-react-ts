import axios, { AxiosInstance } from "axios";

export function createClient(host: string): AxiosInstance {
    return axios.create({
        baseURL: host,
        timeout: 1000,
        headers: {
            Accept: 'application/json',
            Proxy: '127.0.0.1:8050'
        }
    });
}