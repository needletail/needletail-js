import {BaseEndpoint} from "../Helpers/BaseEndpoint";
import {Alternative, Bucket} from "../Entities/Entities";

export class Alternatives extends BaseEndpoint {

    /**
     * @type {Bucket} the bucket to fetch the alternatives from
     */
    bucket: Bucket;

    constructor(apiKey: string, bucket: Bucket) {
        super(apiKey);

        this.bucket = bucket;
    }

    /**
     * Gets all the alternatives from the specified bucket
     *
     * @return {Promise<any>} Contains the result of the API call
     */
    async all(): Promise<Alternative[]> {
        let data = await this.get(`buckets/${this.bucket.getName()}/alternatives`);

        let alternatives: Alternative[] = [];
        // Map each response to an entity
        data.forEach((bucket: any) => {
            alternatives.push(this.toEntity(bucket));
        })

        return alternatives;
    }

    /**
     * Finds a specific alternative on the bucket
     *
     * @param {string} id The id of the alternative to find
     */
    async find(id: string): Promise<Alternative> {
        let data = await this.get(`buckets/${this.bucket.getName()}/alternatives/${id}`);

        return this.toEntity(data);
    }

    /**
     * @param data The data to map
     */
    toEntity(data: any): Alternative {
        return (new Alternative())
            .setApiKey(this.getApiKey())
            .setId(data.id)
            .setOriginalWord(data.original_word)
            .setAlternativeWords(data.alternative_words);
    }

}