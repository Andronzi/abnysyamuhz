import { Product } from "../../pages/api/models/product";
import { emptySplitApi } from "../emptySplitApi";

export const productApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getachievements: build.query<Product[], string>({
            query: (category) => `/achievement`,
            providesTags: ["Achievements"]
        }),
    }),
    overrideExisting: true
})

export const { useGetachievementsQuery } = productApi;