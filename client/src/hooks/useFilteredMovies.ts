import { IFilterOptions } from "@/redux/features/filterOptions/model";
import { useGetMoviesInCinemaQuery } from "@/redux/services/api";

export const useFilteredMovies = ({
  cinemaId,
  genre,
  title,
}: IFilterOptions) => {
  const {
    data,
    isFetching: isLoading,
    error,
  } = useGetMoviesInCinemaQuery(cinemaId ?? "");

  let movies = data || [];

  if (genre !== null) {
    movies = movies.filter((movie) => movie.genre === genre);
  }

  if (title !== "") {
    movies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return { movies, isLoading, error };
};
