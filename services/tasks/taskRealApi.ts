import { Task } from "../../pages/api/models/task";
import { realSplitApi } from "../realSplitApi";


type Exclude = "ID" | 
export type TaskRequest = Omit<Task, "ID">;

export const taskRealApi = realSplitApi.injectEndpoints({
    endpoints: (build) => ({
        getTasks: build.query<Task[], void>({
            query: () => "/task",
            providesTags: ["Tasks"]
        }),
        addTask: build.mutation<Task, TaskRequest>({
            query(body) {
              return {
                url: "/task",
                method: "POST",
                body,
              };
            },
            invalidatesTags: ["Tasks"],
          }),
          deleteTask: build.mutation<void, number>({
            query(ID) {
                return {
                    url: `/task/${ID}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["Tasks"]
        }), 
    }),
    overrideExisting: true
})

export const { useGetTasksQuery } = taskRealApi;