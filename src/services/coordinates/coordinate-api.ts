import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { Feature } from '../ports';
import { CoordinatesResponse } from './coordinate-model';

interface IHeader {
  'x-api-key': string;
}
const Header: IHeader = {
  'x-api-key': process.env.NEXT_PUBLIC_SEAROUTES_KEY,
};
// https://api.searoutes.com/route/v2/sea/98.66667,3.58333;98.3798,3.5263

export const coordinateApi = createApi({
  reducerPath: 'coordinateApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.searoutes.com/route/v2/',
    prepareHeaders: (headers, { getState }) => {
      headers.set('x-api-key', Header['x-api-key']);
      headers.set('content-type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Coordinates'],
  endpoints: (builder) => ({
    getCoordinates: builder.query<CoordinatesResponse, Feature[]>({
      query(features: Feature[]) {
        const coords: String[] = [];
        features.forEach((c) => {
          const coord = c.geometry.coordinates.join(',');
          coords.push(coord);
        });
        return `/sea/${encodeURIComponent(coords.join(';'))}/plan`;
      },
      providesTags: (_result, _error, coordinates) => {
        return [{ type: 'Coordinates', coordinates }];
      },
    }),
  }),
});

export const { useGetCoordinatesQuery, usePrefetch } = coordinateApi;
