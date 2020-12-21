export function range(field: string, gte: string, lte: string) {
    return {
        'range': {
            'field': field,
            'gte': gte,
            'lte': lte
        }
    }
}