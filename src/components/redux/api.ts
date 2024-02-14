import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dummyApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], string>({
      query: (g) => "posts",
      providesTags: ["Posts"],
    }),

    newPost: builder.mutation<Post, Post>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});
export const { useGetPostsQuery, useNewPostMutation } = dummyApi;
