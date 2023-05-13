import { emptySplitApi } from "../emptySplitApi";
import { EmployeeRequestBody, IEmployee } from "./types";

const endpoint = "employee";

export const employeeEmptyApi = emptySplitApi.injectEndpoints({
    endpoints: (build) => ({
        getEmployees: build.query<IEmployee[], void>({
            query: () => `/${endpoint}`,
            providesTags: ["Employee"]
        }),
        getEmployee: build.query<IEmployee, string>({
            query: (ID) => `/${endpoint}/${ID}`,
            providesTags: ["Employee"]
        }),
        addEmployee: build.mutation<void, EmployeeRequestBody>({
            query(body) {
                return {
                    url: `/${endpoint}`,
                    method: "POST",
                    body
                }
            }
        }),
        editEmployee: build.mutation<IEmployee, EmployeeRequestBody>({
            query(data) {
                const { ID, ...body} = data;
                return {
                    url: `/${endpoint}/${ID}`,
                    method: "PATCH",
                    body
                }
            },
            invalidatesTags: ["Employee"]
        }),
        deleteEmployee: build.mutation<void, string>({
            query(ID) {
                return {
                    url: `/${endpoint}/${ID}`,
                    method: "DELETE",
                }
            },
            invalidatesTags: ["Employee"]
        }),
    }),
    overrideExisting: true
})

export const { useGetEmployeeQuery } = employeeEmptyApi;