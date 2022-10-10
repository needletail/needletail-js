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
     * @type {string}
     */
    baseUrl: string;

    /**
     * @param {string} apiKey
     * @param {string} baseUrl
     */
    constructor(apiKey: string, baseUrl: string) {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
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
            const response = await fetch(this.baseUrl + path, {
                method: 'GET',
                ...this.getOptions(config),
            });
            const newResponse: any = response;

            if (response.body) {
                newResponse.data = await response.json();
            }

            return newResponse;
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
            const response = await fetch(this.baseUrl + path, {
                method: 'POST',
                ...this.getOptions(config),
            });
            const newResponse: any = response;

            if (response.body) {
                newResponse.data = await response.json();
            }

            return newResponse;
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
            body: JSON.stringify(config.data),
        };
    }
}

interface ConfigOptions {
    headers?: {};
    data?: {};
}
