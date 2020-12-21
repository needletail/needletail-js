import {BaseEndpoint} from "../Helpers/BaseEndpoint";

export class Search extends BaseEndpoint {

    /**
     * Perform a single search
     *
     * @param params
     */
    find(params: {}) {
        return this.post('search', {
            data: params
        });
    }
    
}