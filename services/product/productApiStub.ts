import { Product } from "../../pages/api/models/product";
import { emptySplitApi } from "../emptySplitApi";

export const productEmptyApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => `/product`,
            providesTags: ["Products"]
        }),
    }),
    overrideExisting: true
})

export const { useGetProductsQuery } = productEmptyApi;