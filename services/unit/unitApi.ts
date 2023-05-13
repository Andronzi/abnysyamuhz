import { emptySplitApi } from "../emptySplitApi";
import { UnitRequestBody, IUnit } from "./types";

const endpoint = "unit";

export const unitApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getUnits: build.query<IUnit[], void>({
            query: () => `/${endpoint}/`,
            providesTags: ["Units"]
        }),
        getUnit: build.query<IUnit, string>({
            query: (ID) => `/${endpoint}/${ID}`,
            providesTags: ["Units"]
        }),
        addUnit: build.mutation<void, UnitRequestBody>({
            query(body) {
                return {
                    url: "/unit",
                    method: "POST",
                    body
                }
            }
        }),
        editUnit: build.mutation<IUnit, UnitRequestBody>({
            query(data) {
                const { ID, ...body} = data;
                return {
                    url: `/${endpoint}/${ID}`,
                    method: "PATCH",
                    body
                }
            },
            invalidatesTags: ["Units"]
        }),
        deleteUnit: build.mutation<void, string>({
            query(ID) {
                return {
                    url: `/${endpoint}/${ID}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["Units"]
        }),
    }),
    overrideExisting: true
})

export const { useGetUnitQuery } = unitApi;
