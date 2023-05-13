import { Product } from "../../pages/api/models/product";
import { emptySplitApi } from "../emptySplitApi";

export const achievementEmptyApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getAchievements: build.query<Product[], void>({
            query: () => `/achievement`,
            providesTags: ["Achievements"]
        }),
    }),
    overrideExisting: true
})

export const { useGetAchievementsQuery } = achievementEmptyApi;