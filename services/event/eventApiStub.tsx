import { IEvent } from "../../pages/api/models/event";
import { emptySplitApi } from "../emptySplitApi";

export const eventsEmptyApi = emptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<IEvent[], void>({
      query: () => "/event",
      providesTags: ["Events"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetEventsQuery } = eventsEmptyApi;
