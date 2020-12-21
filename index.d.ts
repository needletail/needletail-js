import {Buckets} from "./src/Endpoints/Buckets";

declare module '@needletail/js' {
    export class Client {
        private readKey: string;
        constructor(readKey: string);
        buckets(): Buckets;
        bulk(params: Object): Promise<any>;
        search(params: Object): Promise<any>;
        getReadKey(): string;
    }

    export function geoPoint(lat: string, lng: string, distance: string): {}
    export function equals(): {}
    export function notEquals(): {}
    export function should(): {}
    export function field(field: string): {}
    export function fuzzy(field: string, value: string): {}
    export function like(field: string | [], value: string): {}
    export function match(field: string, value: string): {}
    export function range(field: string, gte: string, lte: string): {}
    export function regex(field: string, value: string): {}
    export function startsWith(field: string, value: string): {}
}