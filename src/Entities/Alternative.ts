import {BaseEntity} from '../Helpers/BaseEntity';
// eslint-disable-next-line no-unused-vars
import {Bucket} from './Bucket';

/**
 * @class Alternative
 */
export class Alternative extends BaseEntity {
    /**
     * @type {Bucket} The bucket the alternative belongs to
     */
    bucket: Bucket;
    /**
     * @type {string} The id of the alternative
     */
    id: string;
    /**
     * @type {string} The original word
     */
    originalWord: string;
    /**
     * @type {string[]} The alternatives for the original word
     */
    alternativeWords: string[];

    /**
     * @param {Bucket} bucket
     * @return {Alternative}
     */
    setBucket(bucket: Bucket): Alternative {
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
     * @param {string }id
     * @return {Alternative}
     */
    setId(id: string): Alternative {
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
     * @param {string} originalWord
     * @return {Alternative}
     */
    setOriginalWord(originalWord: string): Alternative {
        this.originalWord = originalWord;
        return this;
    }

    /**
     * @return {string}
     */
    getOriginalWord(): string {
        return this.originalWord;
    }

    /**
     * @param {string[]} alternativeWords
     * @return {Alternative}
     */
    setAlternativeWords(alternativeWords: string[]): Alternative {
        this.alternativeWords = alternativeWords;
        return this;
    }

    /**
     * @return {string[]}
     */
    getAlternativeWords(): string[] {
        return this.alternativeWords;
    }
}
