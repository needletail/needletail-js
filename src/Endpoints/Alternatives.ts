import {BaseEndpoint} from '../Helpers/BaseEndpoint';
// eslint-disable-next-line no-unused-vars
import {Alternative, Bucket} from '../Entities/Entities';

/**
 * @class Alternatives
 */
export class Alternatives extends BaseEndpoint {
    /**
     * @type {Bucket} the bucket to fetch the alternatives from
     */
    bucket: Bucket;

    /**
     * @param {string} apiKey
     * @param {string} bucket
     * @param {string} baseUrl
     */
    constructor(apiKey: string, bucket: Bucket, baseUrl: string) {
        super(apiKey, baseUrl);

        this.bucket = bucket;
    }

    /**
     * Gets all the alternatives from the specified bucket
     *
     * @return {Promise<any>} Contains the result of the API call
     */
    async all(): Promise<Alternative[]> {
        const data = await this.get(`buckets/${this.bucket.getName()}/alternatives`);

        const alternatives: Alternative[] = [];
        // Map each response to an entity
        data.forEach((bucket: any) => {
            alternatives.push(this.toEntity(bucket));
        });

        return alternatives;
    }

    /**
     * Finds a specific alternative on the bucket
     *
     * @param {string} id The id of the alternative to find
     */
    async find(id: string): Promise<Alternative> {
        const data = await this.get(`buckets/${this.bucket.getName()}/alternatives/${id}`);

        return this.toEntity(data);
    }

    /**
     * @param {any} data The data to map
     * @return {Alternative}
     */
    toEntity(data: any): Alternative {
        return (new Alternative())
            .setApiKey(this.getApiKey())
            .setId(data.id)
            .setOriginalWord(data.original_word)
            .setAlternativeWords(data.alternative_words);
    }
}
