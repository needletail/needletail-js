/**
 * @param {string} field
 * @param {string} value
 * @return {{}}
 */
export function regex(field: string, value: string) {
    return {
        'regex': {
            'field': field,
            'value': value,
        },
    };
}
