import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { IMovie } from "@/types/movie";
import { FC } from "react";
import { TicketCounter } from "@/ui/components/TicketCounter";
import { DeleteButton } from "@/ui/components/DeleteButton";

type IBoughtFilmCardProps = Pick<
  IMovie,
  "id" | "title" | "genre" | "posterUrl"
> & { withDeleteButton: boolean };

export const FilmCard: FC<IBoughtFilmCardProps> = ({
  id,
  title,
  genre,
  posterUrl,
  withDeleteButton,
}) => {
  return (
    <div className={styles.container}>
      <Link href={`/film/${id}`}>
        <Image
          src={posterUrl}
          width={100}
          height={120}
          alt="Movie Poster"
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <div className={styles.inner}>
          <Link href={`/film/${id}`}>
            <p className={styles.title}>
              <b>{title}</b>
            </p>
          </Link>
          <p className={styles.genre}>
            <i>{genre}</i>
          </p>
        </div>
        <span className={styles.controls}>
          <TicketCounter movieId={id} />
          {withDeleteButton && <DeleteButton movieId={id} />}
        </span>
      </div>
    </div>
  );
};
