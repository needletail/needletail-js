import {BaseEndpoint} from '../Helpers/BaseEndpoint';

/**
 * @class Search
 */
export class Search extends BaseEndpoint {
    /**
     * Perform a single search
     *
     * @param {{}} params
     * @return {Promise<any>}
     */
    find(params: {}) {
        return this.post('search', {
            data: params,
        });
    }
}
