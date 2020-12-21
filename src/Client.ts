import {Buckets, BulkSearch, Search} from "./Endpoints/Endpoints";
import {Bucket} from "./Entities/Bucket";

/**
 *
 * @class Client
 */
export class Client {

    /**
     *
     * @type {string} The read key for the API
     */
    private readonly readKey: string;

    /**
     *
     * @param {string} readKey The read key for the API
     */
    constructor(readKey: string) {
        this.readKey = readKey;
    }

    /**
     * Handles the bulk searches
     *
     * @param {Object} params The parameters to send to the post request
     * @return {Promise<any>} Contains the result of the API call
     */
    async bulk(params: Object): Promise<any> {
        return await (new BulkSearch(this.getReadKey())).find(params);
    }

    /**
     * Handles the searches
     *
     * @param {Object} params The parameters to send to the post request
     * @return {Promise<any>} Contains the result of the API call
     */
    async search(params: Object): Promise<any> {
        return await (new Search(this.getReadKey())).find(params);
    }

    /**
     * Get all buckets from the API
     */
    buckets() {
        return new Buckets(this.getReadKey());
    }

    alternatives(bucketName: string) {
        let bucket = new Bucket();
        bucket.setApiKey(this.getReadKey())
            .setName(bucketName);

        return bucket.alternatives()
    }

    synonyms(bucketName: string) {
        let bucket = new Bucket();
        bucket.setApiKey(this.getReadKey())
            .setName(bucketName);

        return bucket.synonyms();
    }

    /**
     *
     * @return {string} The read key for the API
     */
    getReadKey(): string {
        return this.readKey;
    }
}
