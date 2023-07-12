import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { PortsResponse } from "./port-model";

interface IHeader {
    "x-api-key": string;
}
const Header: IHeader = {
    "x-api-key": process.env.NEXT_PUBLIC_SEAROUTES_KEY,
};


export const portApi = createApi({
    reducerPath: "portApi",
    baseQuery: fetchBaseQuery({
        //baseUrl: "https://api.searoutes.com/geocoding/v2/",
        baseUrl: "http://localhost:3000/api",
        prepareHeaders: (headers, { getState }) => {
            headers.set('x-api-key', Header["x-api-key"]);
            headers.set('content-type', 'application/json');
            return headers;
        }
    }),
    tagTypes: ["Ports"],
    endpoints: (builder) => ({
        getPorts: builder.query<PortsResponse, string>({
            query(name: string) {
                return `/port/${name}`;
            },
            providesTags: (_result, _error, name) => {
                return [{ type: "Ports", name }]
            },
        }),
    }),
});

export const {
    useGetPortsQuery,
    usePrefetch,
} = portApi;
