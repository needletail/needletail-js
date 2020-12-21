import {BaseEndpoint} from "../Helpers/BaseEndpoint";
import {Synonym, Bucket} from "../Entities/Entities";

export class Synonyms extends BaseEndpoint {

    /**
     * @type {Bucket} the bucket to fetch the synonyms from
     */
    bucket: Bucket;

    constructor(apiKey: string, bucket: Bucket) {
        super(apiKey);

        this.bucket = bucket;
    }

    /**
     * Gets all the synonyms from the specified bucket
     *
     * @return {Promise<any>} Contains the result of the API call
     */
    async all(): Promise<Synonym[]> {
        let data = await this.get(`buckets/${this.bucket.getName()}/synonyms`);

        let synonyms: Synonym[] = [];
        // Map each response to an entity
        data.forEach((bucket: any) => {
            synonyms.push(this.toEntity(bucket));
        })

        return synonyms;
    }

    /**
     * Finds a specific synonym on the bucket
     *
     * @param {string} id The id of the synonym to find
     */
    async find(id: string): Promise<Synonym> {
        let data = await this.get(`buckets/${this.bucket.getName()}/synonyms/${id}`);

        return this.toEntity(data);
    }

    /**
     * @param data The data to map
     */
    toEntity(data: any): Synonym {
        return (new Synonym())
            .setApiKey(this.getApiKey())
            .setId(data.id)
            .setWords(data.words);
    }

}