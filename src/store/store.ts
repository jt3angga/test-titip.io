import { coordinateApi, portApi } from "@/services";
import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "./slices/mapSlice";

const store = configureStore({
    reducer: {
        mapState: mapReducer,
        [portApi.reducerPath]: portApi.reducer,
        [coordinateApi.reducerPath]: coordinateApi.reducer,
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(
        [portApi.middleware, coordinateApi.middleware]
    ),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store



