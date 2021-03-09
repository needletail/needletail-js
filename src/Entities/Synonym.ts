import {BaseEntity} from '../Helpers/BaseEntity';
// eslint-disable-next-line no-unused-vars
import {Bucket} from './Bucket';

/**
 * @class Synonym
 */
export class Synonym extends BaseEntity {
    /**
     * @type {Bucket} The bucket the synonym belongs to
     */
    bucket: Bucket;
    /**
     * @type {string} The id of the synonym
     */
    id: string;
    /**
     * @type {string[]} The synonym words
     */
    words: string[];

    /**
     * @param {Bucket} bucket
     * @return {Synonym}
     */
    setBucket(bucket: Bucket): Synonym {
        this.bucket = bucket;
        return this;
    }

    /**
     * @return {Bucket}
     */
    getBucket(): Bucket {
        return this.bucket;
    }

    /**
     * @param {string} id
     * @return {Synonym}
     */
    setId(id: string): Synonym {
        this.id = id;
        return this;
    }

    /**
     * @return {string}
     */
    getId(): string {
        return this.id;
    }

    /**
     * @param {string[]} words
     * @return {Synonym}
     */
    setWords(words: string[]): Synonym {
        this.words = words;
        return this;
    }

    /**
     * @return {string[]}
     */
    getWords(): string[] {
        return this.words;
    }
}
