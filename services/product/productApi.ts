import { Product } from "../../pages/api/models/product";
import { emptySplitApi } from "../emptySplitApi";

export const productApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Product[], string>({
            query: (category) => `/product?category=${category}`,
            providesTags: ["Products"]
        }),
    }),
    overrideExisting: true
})

export const { useGetProductsQuery } = productApi;