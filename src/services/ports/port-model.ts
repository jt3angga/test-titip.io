export interface Geometry {
    type: string;
    coordinates: [number, number]
}

export interface Properties {
    name: string
    locode: string
    countryCode: string
    country: string
    subdivision?: string
    isSeca: boolean
    type: string
    size: string
}

export interface Feature {
    type: string;
    properties: Properties;
    geometry: Geometry
}

export interface PortsResponse {
    type: string;
    features: Feature[];
    properties: null
}