"use client";

import { FC } from "react";
import { FilmCard } from "@/ui/components/FilmCard";
import styles from "./styles.module.css";
import { Loader } from "@/ui/shared/Loader";
import { useFilteredMovies } from "@/hooks/useFilteredMovies";
import { useFilterOptions } from "@/redux/features/filterOptions/selectors";

export const FilmsList: FC = () => {
  const options = useFilterOptions();

  const { movies, isLoading, error } = useFilteredMovies(options);

  if (isLoading) {
    return (
      <div className={styles.films}>
        {Array.from({ length: 4 }).map((_, i) => (
          <Loader key={i} className={styles.loader} />
        ))}
      </div>
    );
  }

  if (!movies || error) {
    return <span>Произошла ошибка</span>;
  }

  return (
    <div className={styles.films}>
      {movies.map((movie) => (
        <FilmCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          genre={movie.genre}
          posterUrl={movie.posterUrl}
          withDeleteButton={false}
        />
      ))}
    </div>
  );
};
