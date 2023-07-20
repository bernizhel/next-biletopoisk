import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { translateGenre, translateGenres } from "./translator";
import { IReview } from "@/types/review";
import { IMovie, MovieId } from "@/types/movie";
import { CinemaId, ICinema } from "@/types/cinema";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], void>({
      query: () => "movies",
      transformResponse: translateGenres,
    }),
    getMovie: builder.query<IMovie, MovieId>({
      query: (movieId) => ({ url: "movie", params: { movieId } }),
      transformResponse: translateGenre,
    }),
    getCinemas: builder.query<ICinema[], void>({ query: () => "cinemas" }),
    getMoviesInCinema: builder.query<IMovie[], CinemaId>({
      query: (cinemaId) => ({ url: "movies", params: { cinemaId } }),
      transformResponse: translateGenres,
    }),
    getReviews: builder.query<IReview[], void>({ query: () => "reviews" }),
    getReviewsForMovie: builder.query<IReview[], MovieId>({
      query: (movieId) => ({ url: "reviews", params: { movieId } }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetCinemasQuery,
  useGetMoviesInCinemaQuery,
  useGetReviewsQuery,
  useGetReviewsForMovieQuery,
} = api;
