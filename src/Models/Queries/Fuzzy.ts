/**
 * @param {string} field
 * @param {string} value
 * @return {{}}
 */
export function fuzzy(field: string, value: string) {
    return {
        'fuzzy': {
            'field': field,
            'value': value,
        },
    };
}
