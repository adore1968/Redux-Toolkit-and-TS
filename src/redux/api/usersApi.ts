import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../shared/interfaces";

const url = "https://jsonplaceholder.typicode.com/";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => {
        return "users";
      },
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
