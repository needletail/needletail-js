import {BaseEndpoint} from "../Helpers/BaseEndpoint";

export class BulkSearch extends BaseEndpoint {

    /**
     * Perform a bulk search
     *
     * @param params
     */
    find(params: {}) {
        return this.post('search/bulk', {
            data: params
        });
    }

}