import { TagDescription } from "@reduxjs/toolkit/dist/query";
import { emptySplitApi } from "../emptySplitApi";
import { ICommon, TagType } from "./types";

export const commonApi = <IEntity extends ICommon, IRequest extends ICommon>
    (
        endpoint: string, 
        entity: IEntity, 
        request: IRequest, 
        tag: TagDescription<TagType>
    ) => emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getEmployee: build.query<typeof entity, string>({
            query: (ID) => `/${endpoint}/${ID}`,
            providesTags: [tag]
        }),
        addEmployee: build.mutation<void, typeof request>({
            query(body) {
                return {
                    url: `/${endpoint}`,
                    method: "POST",
                    body
                }
            }
        }),
        editEmployee: build.mutation<typeof entity, typeof entity>({
            query(data) {
                const { ID, ...body} = data;
                return {
                    url: `/${endpoint}/${ID}`,
                    method: "PATCH",
                    body
                }
            },
            invalidatesTags: [tag]
        }),
        deleteEmployee: build.mutation<void, string>({
            query(ID) {
                return {
                    url: `/${endpoint}/${ID}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: [tag]
        }),
    }),
    overrideExisting: true
})