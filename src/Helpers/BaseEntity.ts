export class BaseEntity {
    /**
     * @type {string} The apikey used by the entities
     */
    apiKey: string;

    setApiKey(apiKey: string) {
        this.apiKey = apiKey;
        return this;
    }

    getApiKey(): string {
        if (!this.apiKey) {
            throw "API key not set";
        }

        return this.apiKey;
    }
}