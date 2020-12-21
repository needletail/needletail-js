import {BaseEntity} from "../Helpers/BaseEntity";
import {Bucket} from "./Bucket";

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
    original_word: string;
    /**
     * @type {string[]} The alternatives for the original word
     */
    alternative_words: string[];

    setBucket(bucket: Bucket): Alternative {
        this.bucket = bucket;
        return this;
    }

    getBucket(): Bucket {
        return this.bucket;
    }

    setId(id: string): Alternative {
        this.id = id;
        return this;
    }

    getId(): string {
        return this.id;
    }

    setOriginalWord(original_word: string): Alternative {
        this.original_word = original_word;
        return this;
    }

    getOriginalWord(): string {
        return this.original_word;
    }

    setAlternativeWords(alternative_words: string[]): Alternative {
        this.alternative_words = alternative_words;
        return this;
    }

    getAlternativeWords(): string[] {
        return this.alternative_words;
    }
}
