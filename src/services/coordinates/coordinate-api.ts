import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Geometry } from "../ports";
import { CoordinatesResponse } from "./coordinate-model";

interface IHeader {
    "x-api-key": string;
}
const Header: IHeader = {
    "x-api-key": process.env.NEXT_PUBLIC_SEAROUTES_KEY,
};
// https://api.searoutes.com/route/v2/sea/98.66667,3.58333;98.3798,3.5263


export const coordinateApi = createApi({
    reducerPath: "coordinateApi",
    baseQuery: fetchBaseQuery({
        //baseUrl: "https://api.searoutes.com/route/v2/",
        baseUrl: "http://localhost:3000/api",
        prepareHeaders: (headers, { getState }) => {
            headers.set('x-api-key', Header["x-api-key"]);
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ["Coordinates"],
    endpoints: (builder) => ({
        getCoordinates: builder.query<CoordinatesResponse, Geometry[]>({
            query(coordinates: Geometry[]) {
                const coords: String[] = [];
                coordinates.forEach((c) => {
                    const coord = c.coordinates.join(",");
                    coords.push(coord);
                })
                //return `/sea/${encodeURIComponent(coords.join(";"))}/plan`;
                return `/sea/${encodeURIComponent(coords.join(";"))}`;
            },
            providesTags: (_result, _error, coordinates) => {
                return [{ type: "Coordinates", coordinates }]
            },
        }),
    }),
});

export const {
    useGetCoordinatesQuery,
    usePrefetch,
} = coordinateApi;
