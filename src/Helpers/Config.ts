/**
 *
 * @class Config
 */
export class Config {
    /**
     *
     * @type {string} Contains the base url for all API requests
     */
    static baseUrl: string = 'https://needletail.dev/3.0/';

    /**
     *
     * @type {ConfigHeaders} Contains the header names to make a request
     */
    static headers: ConfigHeaders = {
        apiKey: 'x-needletail-api-key',
    }
}

interface ConfigHeaders {
    /**
     *
     * @type {string}
     */
    apiKey: string;
}
