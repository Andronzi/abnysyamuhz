import { Gift } from "../../pages/api/models/gift";
import { emptySplitApi } from "../emptySplitApi";

export const achievementEmptyApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getAchievements: build.query<Gift[], void>({
            query: () => `/achievement`,
            providesTags: ["Achievements"]
        }),
    }),
    overrideExisting: true
})

export const { useGetAchievementsQuery } = achievementEmptyApi;