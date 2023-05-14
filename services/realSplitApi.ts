import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// http://somnoynadno.ru:8080/api/v
// http://localhost:3000/api

export const realSplitApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://somnoynadno.ru:8080/api/v1' }),
    tagTypes: ["News", "Gifts", "Achievements", "Employee", "Events", "Units", "Tasks"],
    endpoints: () => ({}),
})
