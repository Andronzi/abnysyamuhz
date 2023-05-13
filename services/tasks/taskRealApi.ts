import { Task } from "../../pages/api/models/task";
import { realSplitApi } from "../realSplitApi";

export const taskRealApi = realSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query<Task[], void>({
            query: () => "/task",
            providesTags: ["Tasks"]
        }),
    }),
    overrideExisting: true
})

export const { useGetTasksQuery } = taskRealApi;