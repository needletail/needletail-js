export function like(field: string | [], value: string) {
    return {
        'like': {
            'fields': (typeof field === 'string') ? [field] : field,
            'value': value
        }
    }
}