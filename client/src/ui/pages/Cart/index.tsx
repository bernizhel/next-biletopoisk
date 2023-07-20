"use client";

import styles from "./styles.module.css";
import { TotalTickets } from "@/ui/components/TotalTickets";
import { useShoppingCart } from "@/redux/features/shoppingCart/selectors";
import { useGetMoviesQuery } from "@/redux/services/api";
import { FC } from "react";
import { FilmCard } from "@/ui/components/FilmCard";
import { Loader } from "@/ui/shared/Loader";

export const Cart: FC = () => {
  const { data, isLoading, error } = useGetMoviesQuery();
  const shoppingCart = useShoppingCart();

  if (isLoading) {
    return <Loader className={styles.loader} />;
  }

  if (!data || error) {
    return <span>Произошла ошибка</span>;
  }

  const movieIds = Object.keys(shoppingCart);
  const boughtFilms = data.filter((movie) =>
    movieIds.find((movieId) => movieId === movie.id)
  );

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {boughtFilms.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            title={film.title}
            genre={film.genre}
            posterUrl={film.posterUrl}
            withDeleteButton={true}
          />
        ))}
      </div>
      <TotalTickets />
    </div>
  );
};
