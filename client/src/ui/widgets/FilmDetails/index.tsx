"use client";

import styles from "./styles.module.css";
import { useGetMovieQuery } from "@/redux/services/api";
import { MovieId } from "@/types/movie";
import { FC } from "react";
import { Loader } from "@/ui/shared/Loader";
import Image from "next/image";
import { TicketCounter } from "@/ui/components/TicketCounter";

interface IFilmDetailsProps {
  movieId: MovieId;
}

export const FilmDetails: FC<IFilmDetailsProps> = ({ movieId }) => {
  const { data, isLoading, error } = useGetMovieQuery(movieId);

  if (isLoading) {
    return <Loader className={styles.container} />;
  }

  if (!data || error) {
    return <span>Произошла ошибка</span>;
  }

  return (
    <div className={styles.container}>
      <Image
        src={data.posterUrl}
        width={400}
        height={500}
        alt="Film Poster"
        className={styles.poster}
      />
      <div className={styles.info}>
        <div className={styles["main-info"]}>
          <div className={styles.header}>
            <h2 className={styles.heading}>{data.title}</h2>
            <TicketCounter movieId={data.id} />
          </div>
          <div className={styles.details}>
            <p className={styles.text}>
              <b>Жанр: </b>
              {data.genre}
            </p>
            <p className={styles.text}>
              <b>Год выпуска: </b>
              {data.releaseYear}
            </p>
            <p className={styles.text}>
              <b>Рейтинг: </b>
              {data.rating}
            </p>
            <p className={styles.text}>
              <b>Режиссёр: </b>
              {data.director}
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles["description-heading"]}>
            <b>Описание</b>
          </p>
          <p className={styles["description-text"]}>{data.description}</p>
        </div>
      </div>
    </div>
  );
};
