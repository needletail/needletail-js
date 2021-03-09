import {BaseEndpoint} from '../Helpers/BaseEndpoint';
import {Bucket} from '../Entities/Bucket';

/**
 * @class Buckets
 */
export class Buckets extends BaseEndpoint {
    /**
     * Gets all the buckets
     */
    async all() {
        const data = await this.get('buckets');

        const buckets: Bucket[] = [];
        // Map each entry to an entity
        data.forEach((bucket: any) => {
            buckets.push(this.toEntity(bucket));
        });

        return buckets;
    }

    /**
     * Get a specific bucket
     *
     * @param {string} id The id of the bucket to fetch
     */
    async find(id: string) {
        const data = await this.get(`buckets/${id}`);

        return this.toEntity(data);
    }

    /**
     * @param {any} data The data to map
     * @return {Bucket}
     */
    toEntity(data: any): Bucket {
        return (new Bucket())
            .setApiKey(this.getApiKey())
            .setName(data.name)
            .setShowScore(data.show_score)
            .setDocumentCount(data.document_count)
            .setSearchableAttributes(data.searchable_attributes)
            .setRetrievableAttributes(data.retrievable_attributes)
            .setGroupBy(data.group_by)
            .setAttributes(data.attributes)
            .setBoosts(data.boosts);
    }
}
