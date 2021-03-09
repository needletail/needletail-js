/**
 * @class BaseEntity
 */
export class BaseEntity {
    /**
     * @type {string} The apikey used by the entities
     */
    apiKey: string;

    /**
     * @param {string} apiKey
     * @return {BaseEntity}
     */
    setApiKey(apiKey: string) {
        this.apiKey = apiKey;
        return this;
    }

    /**
     * @return {string}
     */
    getApiKey(): string {
        if (!this.apiKey) {
            throw new Error('API key not set');
        }

        return this.apiKey;
    }
}
