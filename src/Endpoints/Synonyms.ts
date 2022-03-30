import {BaseEndpoint} from '../Helpers/BaseEndpoint';
// eslint-disable-next-line no-unused-vars
import {Synonym, Bucket} from '../Entities/Entities';

/**
 * @class Synonyms
 */
export class Synonyms extends BaseEndpoint {
    /**
     * @type {Bucket} the bucket to fetch the synonyms from
     */
    bucket: Bucket;

    /**
     * @param {string} apiKey
     * @param {Bucket} bucket
     * @param {string} baseUrl
     */
    constructor(apiKey: string, bucket: Bucket, baseUrl: string) {
        super(apiKey, baseUrl);

        this.bucket = bucket;
    }

    /**
     * Gets all the synonyms from the specified bucket
     *
     * @return {Promise<any>} Contains the result of the API call
     */
    async all(): Promise<Synonym[]> {
        const data = await this.get(`buckets/${this.bucket.getName()}/synonyms`);

        const synonyms: Synonym[] = [];
        // Map each response to an entity
        data.forEach((bucket: any) => {
            synonyms.push(this.toEntity(bucket));
        });

        return synonyms;
    }

    /**
     * Finds a specific synonym on the bucket
     *
     * @param {string} id The id of the synonym to find
     */
    async find(id: string): Promise<Synonym> {
        const data = await this.get(`buckets/${this.bucket.getName()}/synonyms/${id}`);

        return this.toEntity(data);
    }

    /**
     * @param {any} data The data to map
     * @return {Synonym}
     */
    toEntity(data: any): Synonym {
        return (new Synonym())
            .setApiKey(this.getApiKey())
            .setId(data.id)
            .setWords(data.words);
    }
}
