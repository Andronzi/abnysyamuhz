import { Product } from "../../pages/api/models/product";
import { realSplitApi } from "../realSplitApi";

export const productRealApi = realSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => `/gift`,
            providesTags: ["Products"]
        }),
    }),
    overrideExisting: true
})

export const { useGetProductsQuery } = productRealApi;