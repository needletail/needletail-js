import {Buckets, BulkSearch, Search} from './Endpoints/Endpoints';
import {Bucket} from './Entities/Bucket';
import {Config} from './Helpers/Config';

/**
 * @class Client
 */
export class Client {
    /**
     * @type {string} The read key for the API
     */
    private readonly readKey: string;

    /**
     * @type {string}
     */
    baseUrl: string;

    /**
     *
     * @param {string} readKey The read key for the API
     * @param {string} baseUrl
     */
    constructor(readKey: string, baseUrl: string|null) {
        this.readKey = readKey;
        this.baseUrl = baseUrl ?? Config.baseUrl;
    }

    /**
     * Handles the bulk searches
     *
     * @param {Object} params The parameters to send to the post request
     * @return {Promise<any>} Contains the result of the API call
     */
    async bulk(params: Object): Promise<any> {
        return await (new BulkSearch(this.getReadKey(), this.baseUrl)).find(params);
    }

    /**
     * Handles the searches
     *
     * @param {Object} params The parameters to send to the post request
     * @return {Promise<any>} Contains the result of the API call
     */
    async search(params: Object): Promise<any> {
        return await (new Search(this.getReadKey(), this.baseUrl)).find(params);
    }

    /**
     * Get all buckets from the API
     * @return {Buckets} The buckets endpoint
     */
    buckets() {
        return new Buckets(this.getReadKey(), this.baseUrl);
    }

    /**
     * @param {string} bucketName
     * @return {Alternatives}
     */
    alternatives(bucketName: string) {
        const bucket = new Bucket();
        bucket.setApiKey(this.getReadKey())
            .setName(bucketName);

        return bucket.alternatives();
    }

    /**
     * @param {string} bucketName
     * @return {Synonyms}
     */
    synonyms(bucketName: string) {
        const bucket = new Bucket();
        bucket.setApiKey(this.getReadKey())
            .setName(bucketName);

        return bucket.synonyms();
    }

    /**
     * @return {string} The read key for the API
     */
    getReadKey(): string {
        return this.readKey;
    }
}
