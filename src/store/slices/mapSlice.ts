import { createSlice } from '@reduxjs/toolkit';
// import { HYDRATE } from "next-redux-wrapper";
import { RootState } from '../store';

import { CoordinatesResponse, Feature } from '@/services';

export type Coordinate = [number, number];

export type MapState = {
  mapStyle: string;
  viewState: { latitude: number; longitude: number; zoom: number };
  dataSource?: CoordinatesResponse;
  selectedPorts?: Feature[];
};

const initialState: MapState = {
  mapStyle: 'mapbox://styles/mapbox/streets-v9',
  viewState: {
    latitude: -6.176132,
    longitude: 106.822864,
    zoom: 11,
  },
  dataSource: undefined,
  selectedPorts: undefined,
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setMapStyle(state, action) {
      state.mapStyle = action.payload;
    },
    setMapViewState(state, action) {
      state.viewState = action.payload;
    },
    setDataSource(state, action) {
      state.dataSource = action.payload;
    },
    setSelectedPort(state, action) {
      state.selectedPorts = action.payload;
    },
  },
});

export const { setMapStyle, setMapViewState, setDataSource, setSelectedPort } =
  mapSlice.actions;

export const mapSelector = (state: RootState) => state.mapState;
export default mapSlice.reducer;
