import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { emptySplitApi } from "./emptySplitApi";
import {realSplitApi} from "./realSplitApi";

export const store = configureStore({
    reducer: {
        [emptySplitApi.reducerPath]: emptySplitApi.reducer,
        [realSplitApi.reducerPath]: realSplitApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(emptySplitApi.middleware),
})

setupListeners(store.dispatch);