import { News } from "../../pages/api/models/news";
import { emptySplitApi } from "../emptySplitApi";

export const newsEmptyApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getNews: build.query<News[], void>({
            query: () => "/news",
            providesTags: ["News"]
        }),
    }),
    overrideExisting: true
})

export const { useGetNewsQuery } = newsEmptyApi;