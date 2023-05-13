import { Gift } from "../../pages/api/models/gift";
import { realSplitApi } from "../realSplitApi";

export const giftRealApi = realSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getGifts: build.query<Gift[], void>({
            query: () => `/gift`,
            providesTags: ["Gifts"]
        }),
    }),
    overrideExisting: true
})

export const { useGetGiftsQuery } = giftRealApi;