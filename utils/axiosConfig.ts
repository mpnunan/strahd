import { clientCredentials } from "./client";
import axios, { AxiosRequestConfig } from 'axios'

const config: AxiosRequestConfig = {
    baseURL: clientCredentials.databaseURL,
    timeout: 2000,
    headers: {
        'Apikey' : `${clientCredentials.apiKey}`,
        'Content-Type' : 'application/json',
        
    },
}

const data = axios.create(config);

export default data;
