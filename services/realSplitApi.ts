import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const realSplitApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    tagTypes: ["News", "Products", "Achievements", "Employee", "Events", "Units", "Tasks"],
    endpoints: () => ({}),
})
