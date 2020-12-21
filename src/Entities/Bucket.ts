import {Synonyms, Alternatives} from "../Endpoints/Endpoints";
import {BaseEntity} from "../Helpers/BaseEntity";

export class Bucket extends BaseEntity {
    /**
     * @type {string} The name of the bucket
     */
    name?: string;
    /**
     * @type {boolean} Show the score of the search responses
     */
    show_score: boolean;

    document_count: number;

    searchable_attributes?: [];

    retrievable_attributes?: [];

    group_by?: string;

    attributes: [];

    boosts: {};

    setName(name: string): Bucket {
        this.name = name;
        return this;
    }

    getName(): string {
        return this.name;
    }

    setShowScore(show_score: boolean): Bucket {
        this.show_score = show_score;
        return this;
    }

    isShowScore(): boolean {
        return this.show_score;
    }

    setDocumentCount(document_count: number): Bucket {
        this.document_count = document_count;
        return this;
    }

    getDocumentCount(): number {
        return this.document_count;
    }

    setSearchableAttributes(searchable_attributes?: []): Bucket {
        this.searchable_attributes = searchable_attributes;
        return this;
    }

    getSearchableAttributes(): null|[] {
        return this.searchable_attributes;
    }

    setRetrievableAttributes(retrievable_attributes?: []): Bucket {
        this.retrievable_attributes = retrievable_attributes;
        return this;
    }

    getRetrievableAttributes(): null|[] {
        return this.retrievable_attributes;
    }

    setGroupBy(group_by: string): Bucket {
        this.group_by = group_by;
        return this;
    }

    getGroupBy(): string {
        return this.group_by;
    }

    setAttributes(attributes: []): Bucket {
        this.attributes = attributes;
        return this;
    }

    getAttributes(): [] {
        return this.attributes;
    }

    setBoosts(boosts: {}): Bucket {
        this.boosts = boosts;
        return this;
    }

    getBoosts(): {} {
        return this.boosts;
    }

    synonyms(): Synonyms {
        return new Synonyms(this.getApiKey(), this);
    }

    alternatives(): Alternatives {
        return new Alternatives(this.getApiKey(), this);
    }
}
