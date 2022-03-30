import {Synonyms, Alternatives} from '../Endpoints/Endpoints';
import {BaseEntity} from '../Helpers/BaseEntity';

/**
 * @class Bucket
 */
export class Bucket extends BaseEntity {
    /**
     * @type {string} The name of the bucket
     */
    name?: string;
    /**
     * @type {boolean} Show the score of the search responses
     */
    showScore: boolean;

    /**
     * @type {number}
     */
    documentCount: number;

    /**
     * @type {[]}
     */
    searchableAttributes?: [];

    /**
     * @type {[]}
     */
    retrievableAttributes?: [];

    /**
     * @type {string}
     */
    groupBy?: string;

    /**
     * @type {[]}
     */
    attributes: [];

    /**
     * @type {{}}
     */
    boosts: {};

    baseUrl: string;

    /**
     * @param {string} name
     * @return {Bucket}
     */
    setName(name: string): Bucket {
        this.name = name;
        return this;
    }

    /**
     * @return {string}
     */
    getName(): string {
        return this.name;
    }

    /**
     * @param {boolean} showScore
     * @return {Bucket}
     */
    setShowScore(showScore: boolean): Bucket {
        this.showScore = showScore;
        return this;
    }

    /**
     * @return {boolean}
     */
    isShowScore(): boolean {
        return this.showScore;
    }

    /**
     * @param {number} documentCount
     * @return {Bucket}
     */
    setDocumentCount(documentCount: number): Bucket {
        this.documentCount = documentCount;
        return this;
    }

    /**
     * @return {number}
     */
    getDocumentCount(): number {
        return this.documentCount;
    }

    /**
     * @param {[]} searchableAttributes
     * @return {Bucket}
     */
    setSearchableAttributes(searchableAttributes?: []): Bucket {
        this.searchableAttributes = searchableAttributes;
        return this;
    }

    /**
     * @return {null|[]}
     */
    getSearchableAttributes(): null|[] {
        return this.searchableAttributes;
    }

    /**
     * @param {[]} retrievableAttributes
     * @return {Bucket}
     */
    setRetrievableAttributes(retrievableAttributes?: []): Bucket {
        this.retrievableAttributes = retrievableAttributes;
        return this;
    }

    /**
     * @return {null|[]}
     */
    getRetrievableAttributes(): null|[] {
        return this.retrievableAttributes;
    }

    /**
     * @param {string} groupBy
     * @return {Bucket}
     */
    setGroupBy(groupBy: string): Bucket {
        this.groupBy = groupBy;
        return this;
    }

    /**
     * @return {string}
     */
    getGroupBy(): string {
        return this.groupBy;
    }

    /**
     * @param {[]} attributes
     * @return {Bucket}
     */
    setAttributes(attributes: []): Bucket {
        this.attributes = attributes;
        return this;
    }

    /**
     * @return {[]}
     */
    getAttributes(): [] {
        return this.attributes;
    }

    /**
     * @param {{}} boosts
     * @return {Bucket}
     */
    setBoosts(boosts: {}): Bucket {
        this.boosts = boosts;
        return this;
    }

    /**
     * @return {{}}
     */
    getBoosts(): {} {
        return this.boosts;
    }

    /**
     * @return {Synonyms}
     */
    synonyms(): Synonyms {
        return new Synonyms(this.getApiKey(), this, this.getBaseUrl());
    }

    /**
     * @return {Alternatives}
     */
    alternatives(): Alternatives {
        return new Alternatives(this.getApiKey(), this, this.getBaseUrl());
    }

    /**
     * @param {string} baseUrl
     * @return {Bucket}
     */
    setBaseUrl(baseUrl: string): Bucket {
        this.baseUrl = baseUrl;
        return this;
    }

    /**
     * @return {string}
     */
    getBaseUrl(): string {
        return this.baseUrl;
    }
}
