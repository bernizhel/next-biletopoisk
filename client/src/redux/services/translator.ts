import { Genre, IMovie, UnprocessedMovie } from "@/types/movie";

export const genreMapping: Record<string, Genre> = {
  action: "Боевик",
  comedy: "Комедия",
  fantasy: "Фэнтези",
  horror: "Ужасы",
};

export const translateGenre = (movie: UnprocessedMovie): IMovie => ({
  ...movie,
  genre: genreMapping[movie.genre],
});

export const translateGenres = (response: UnprocessedMovie[]): IMovie[] => {
  return response.map(translateGenre);
};
