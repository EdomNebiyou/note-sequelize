import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const BASE_URL = "/api/note";
const noteApi = createApi({
  reducerPath: "noteApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Note"],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => "",
      providesTags: ["Note"],
    }),
    getNote: builder.query({
      query: (id) => `/${id}`,
      providesTags:["Note"]
    }),
    createNote: builder.mutation({
      query: (note) => ({
        url: "",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Note"],
    }),
    updateNote: builder.mutation({
      query: ({ id, ...note }) => ({
        url: `/${id}`,
        method: "PUT",
        body: note,
      }),
      invalidatesTags: ["Note"],
    }),
    deleteNote: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Note"],
    }),
  }),
});
export const {
  useGetNotesQuery,
  useGetNoteQuery,
  useCreateNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = noteApi;
export default noteApi;
