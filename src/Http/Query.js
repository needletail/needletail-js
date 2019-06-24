import Bucket from "../Bucket";
import objectAssign from 'object-assign';

require('es6-promise').polyfill();

import axios from 'axios';

let version_warning_logged = false;

class Query {
    /**
     * Call the Needletail API based on the given path and bucket params.
     *
     * @param   {String} path
     * @param   {Bucket} bucket
     * @param   {String} api_key
     * @param   {String} method
     * @param   {Object} headers
     * @returns {Promise}
     */
    static execute(path, bucket, api_key, method = 'post', headers = {}) {
        return this.raw(
            path,
            method,
            api_key,
            bucket.getParams(), {
                'x-needletail-bucket': bucket.getName()
            }
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

        let response = axios({
            url: path,
            method: method,
            baseURL: 'http://api.staging.needletail.io/2.0/',
            data: JSON.stringify(data),
            headers: objectAssign(predefined_headers, headers)
        }).catch(thrown => {});

        response.then(res => {
            if (res.data.warning && !version_warning_logged) {
                console.warn(res.data.warning);

                // To prevent the warning being logged multiple times, make sure that it only happens once.
                version_warning_logged = true;
            }
        });

        return response;
    }
}

export default Query;
