import axios from 'axios';
import {Config} from './Config';

/**
 * @class BaseEndpoint
 */
export class BaseEndpoint {
    /**
     * @type {string} The apikey used for the requests
     */
    apiKey: string;

    /**
     * @param {string} apiKey
     */
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * @return {string}
     */
    getApiKey(): string {
        return this.apiKey;
    }

    /**
     *
     * @param {string} path The path to make the get request to.
     *      Will always be prefixed with the base url
     * @param {Object} config Extra headers to send along with the request
     * @return {Promise<any>} Contains the result of the API call
     */
    async get(path: string, config: ConfigOptions = {}): Promise<any> {
        try {
            const response = await axios.get(Config.baseUrl + path, this.getOptions(config));

            if (response.data.warning) {
                console.warn(response.data.warning);
            }

            return response;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     *
     * @param {string} path The path to make the post request to.
     *      Will always be prefixed with the base url
     * @param {Object} config Extra headers to send along with the request
     * @return {Promise<any>} Contains the result of the API call
     */
    async post(path: string, config: ConfigOptions = {}): Promise<any> {
        try {
            const response = await axios.post(Config.baseUrl + path, config.data, this.getOptions(config));

            if (response.data.warning) {
                console.warn(response.data.warning);
            }

            return response;
        } catch (e) {
            console.error(e);
        }
    }

    /**
     * Combines default headers with the custom headers for the request
     *
     * @param {Object} config The headers to combine the default headers with
     * @return {Object} The options for the request
     */
    private getOptions(config: ConfigOptions = {}): Object {
        return {
            headers: {
                'content-type': 'application/json; charset=UTF-8',
                [Config.headers.apiKey]: this.getApiKey(),
                ...config.headers,
            },
            data: config.data,
            params: config.params,
        };
    }
}

interface ConfigOptions {
    headers?: {};
    data?: {};
    params?: {};
}
