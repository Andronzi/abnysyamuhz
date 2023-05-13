import { News } from "../../pages/api/models/news";
import { emptySplitApi } from "../emptySplitApi";

export const newsApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getNews: build.query<News[], void>({
            query: () => "/news",
            providesTags: ["News"]
        }),
    }),
    overrideExisting: true
})

export const { useGetNewsQuery } = newsApi;