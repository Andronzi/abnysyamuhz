import { NewsRequest } from "../../pages/admin-panel/news/create";
import { News } from "../../pages/api/models/news";
import { realSplitApi } from "../realSplitApi";

export const newsRealApi = realSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getNews: build.query<News[], void>({
            query: () => "/news",
            providesTags: ["News"]
        }),
        addNews: build.mutation<News, NewsRequest>({
            query(body) {
              return {
                url: "/news",
                method: "POST",
                body,
              };
            },
            invalidatesTags: ["News"],
          }),
        deleteNews: build.mutation<void, number>({
            query(ID) {
                return {
                    url: `/news/${ID}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["News"]
        }),
    }),
    overrideExisting: true
})

export const { useGetNewsQuery, useAddNewsMutation, useDeleteNewsMutation } = newsRealApi;