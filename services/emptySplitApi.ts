import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://somnoynadno.ru:8080/api/v1/' }),
    tagTypes: ["News", "Products", "Achievements", "Employee"],
    endpoints: () => ({}),
})