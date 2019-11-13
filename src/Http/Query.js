import Bucket from "../Bucket";
import objectAssign from 'object-assign';

require('es6-promise').polyfill();

import axios from 'axios';

let version_warning_logged = false;

let cached_responses = {};

class Query {
    /**
     * Call the Needletail API based on the given path and bucket params.
     *
     * @param   {String} path
     * @param   {Bucket} bucket
     * @param   {String} api_key
     * @param   {String} method
     * @returns {Promise}
     */
    static execute(path, bucket, api_key, method = 'post') {
        return this.raw(
            path,
            method,
            api_key,
            bucket.getParams(),
            { 'x-needletail-bucket': bucket.getName() }
        );
    }

    /**
     * Run a 'raw' query against the Needletail API.
     *
     * @param  {String} path
     * @param  {String} method
     * @param  {String} api_key
     * @param  {Object} data
     * @param  {Object} headers
     * @returns {Promise<AxiosResponse<any> | never>}
     */
    static raw(path, method, api_key, data = {}, headers = {}) {
        let predefined_headers = {
            'x-needletail-api-key': api_key,
            'content-type': 'application/json; charset=UTF-8'
        };

        // The batch query doesn't require an api key header, so we can remove it.
        if (path === 'batch') {
            delete predefined_headers['x-needletail-api-key'];
        }

        let request = {
            url: path,
            method: method,
            baseURL: 'https://api.staging.needletail.io/2.1/',
            data: JSON.stringify(data),
            headers: objectAssign(predefined_headers, headers)
        };

        if (response = Query.hasCachedResponse(request)) {
            return new Promise((resolve, reject) => {
                return resolve(response);
            });
        }

        let response = axios(request).catch(thrown => { });

        response.then(res => {
            if (res.data.warning && !version_warning_logged) {
                console.warn(res.data.warning);

                // To prevent the warning being logged multiple times, make sure that it only happens once.
                version_warning_logged = true;
            }

            cached_responses[Query.hashRequest(request)] = res;
        });

        return response;
    }

    /**
     * Check whether the incoming request has been run before, if so return it.
     *
     * @param   {Object} request
     * @returns {Boolean|Object}
     */
    static hasCachedResponse(request) {
        let hash = Query.hashRequest(request);

        if (typeof cached_responses[hash] === 'undefined') {
            return false;
        }

        return cached_responses[hash];
    }

    /**
     * Hash the request that will be send.
     *
     * @param   {Object} request
     * @returns {integer}
     */
    static hashRequest(request) {
        let hash = 0;
        let raw_request = JSON.stringify(request);

        for (let i = 0; i < raw_request.length; i++) {
            let char = raw_request.charCodeAt(i);

            hash = ((hash << 5) - hash) + char;

            // Convert to 32bit integer
            hash = hash & hash;
        }

        return hash;
    }
}

export default Query;
