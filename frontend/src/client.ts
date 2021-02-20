import { AxiosInstance } from "axios";
import { config } from "./config";
import { Data } from "./types";
import { createClient } from "./utils/createClient";

import artists from './data/artists.json'
import { formatToDataList } from "./utils/formatToDataList";

interface IClient {
    /**
     * Returns the first page of data for a given query string.
     * @param query user's input value to search with
     */
    search(query: string): Data[]
}

export default class Client implements IClient {

    private static instance: IClient;
    client: AxiosInstance;

    private constructor(host: string) {
        this.client = createClient(host)
    }

    static getInstance(): IClient {
        if (!this.instance) {
            this.instance = new this(config.SERVER_HOST)
        }
        return this.instance;
    }

    search(query: string): Data[] {
        // throw new Error('method is not implemented')
        const list = artists.slice(0, 10);
        console.log('list: ', list)
        return formatToDataList(list)
    }
}