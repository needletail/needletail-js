/**
 * @param {string} field
 * @param {string} value
 * @return {{}}
 */
export function match(field: string, value: string | []) {
    return {
        'match': {
            'field': field,
            'values': (typeof value === 'string') ? [value] : value,
        },
    };
}
