import { News } from "../../pages/api/models/news";
import {realSplitApi} from "../realSplitApi";

export const newsApi = realSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getNews: build.query<News[], void>({
            query: () => "/news",
            providesTags: ["News"]
        }),
    }),
    overrideExisting: true
})

export const { useGetNewsQuery } = newsApi;