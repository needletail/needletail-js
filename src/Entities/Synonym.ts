import {BaseEntity} from "../Helpers/BaseEntity";
import {Bucket} from "./Bucket";

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

    setBucket(bucket: Bucket): Synonym {
        this.bucket = bucket;
        return this;
    }

    getBucket(): Bucket {
        return this.bucket;
    }

    setId(id: string): Synonym {
        this.id = id;
        return this;
    }

    getId(): string {
        return this.id;
    }

    setWords(words: string[]): Synonym {
        this.words = words;
        return this;
    }

    getWords(): string[] {
        return this.words;
    }
}