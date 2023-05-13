import { IEvent } from "../../pages/api/models/event";
import { realSplitApi } from "../realSplitApi";

export const eventsRealApi = realSplitApi.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query<IEvent[], void>({
      query: () => "/event",
      providesTags: ["Events"],
    }),
  }),
  overrideExisting: true,
});

export const { useGetEventsQuery } = eventsRealApi;