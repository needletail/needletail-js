import {BaseEndpoint} from '../Helpers/BaseEndpoint';

/**
 * @class BulkSearch
 */
export class BulkSearch extends BaseEndpoint {
    /**
     * Perform a bulk search
     *
     * @param {{}} params
     * @return {Promise<any>}
     */
    find(params: {}) {
        return this.post('search/bulk', {
            data: params,
        });
    }
}
