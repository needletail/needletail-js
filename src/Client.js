import Bucket from './Bucket'
import Query from "./Http/Query";

export class Client
{
    /**
     * Create a new Client instance.
     *
     * @param read_key
     */
    constructor(read_key)
    {
        this.read_key = read_key;
    }

    /**
     * Initialize a new bucket.
     *
     * @param  {String} bucket_name
     * @return {Bucket}
     */
    initBucket(bucket_name)
    {
        return new Bucket(
            bucket_name,
            this.read_key
        );
    }

    /**
     * List all buckets available to the given api key.
     *
     * @param   {Function} callback
     * @returns {Promise}
     */
    list(callback)
    {
        return Query.raw('buckets', 'get', this.read_key).then(callback);
    }

    /**
     * Perform a batch query on the Needletail API.
     *
     * @param   {Object} params
     * @param   {Function} callback
     * @returns {Promise<any>}
     */
    batch(params, callback)
    {
        const batch = {
            'read_key': this.read_key,
            'requests': [
                params
            ]
        };

        return Query.raw('batch', 'post', null, batch).then(callback);
    }
}