export interface IMovie {
  id: MovieId;
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: Genre;
  rating: number;
  director: string;
  reviewIds: string[];
}

export type UnprocessedMovie = IMovie & { genre: string };

export type Genre = "Боевик" | "Комедия" | "Фэнтези" | "Ужасы";

export type MovieId = string;
