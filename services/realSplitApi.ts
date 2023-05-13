import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const realSplitApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://somnoynadno.ru:8080/api/v1/' }),
    tagTypes: ["News", "Employee", "Units"],
    endpoints: () => ({}),
})
