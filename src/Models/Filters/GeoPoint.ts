/**
 * @param {string} lat
 * @param {string} lng
 * @param {string} distance
 * @return {{}}
 */
export function geoPoint(lat: string, lng: string, distance: string) {
    return {
        'geo_point': {
            'lat': lat,
            'lng': lng,
            'distance': distance,
        },
    };
}
