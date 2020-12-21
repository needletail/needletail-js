export function startsWith(field: string, value: string) {
    return {
        'starts_with': {
            'field': field,
            'value': value
        }
    }
}