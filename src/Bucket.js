import Query from './Http/Query'

class Bucket
{
    /**
     * Create a new Bucket.
     *
     * @param  {String} name
     * @param  {String} read_key
     */
    constructor(name, read_key)
    {
        this.name = name;

        this.read_key = read_key;
    }

    /**
     * Perform a search query on the Needletail API.
     *
     * @param  {Object} params
     * @param  {Function} callback
     * @return {Promise}
     */
    search(params, callback)
    {
        this.params = params;

        return Query.execute('search', this, this.read_key).then(callback);
    }

    /**
     * Perform an aggregated search on the Needletail API.
     *
     * @param  {Object} params
     * @param  {Function} callback
     * @return {Promise}
     */
    aggregation(params, callback)
    {
        this.params = params;

        return Query.execute('aggregation', this, this.read_key).then(callback);
    }

    /**
     * Retrieve the bucket' name.
     *
     * @returns {String}
     */
    getName()
    {
        return this.name;
    }

    /**
     * Retrieve all the bucket parameters.
     *
     * @returns {Array}
     */
    getParams()
    {
        return this.params;
    }
}

export default Bucket;