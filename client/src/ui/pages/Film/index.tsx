import { FC } from "react";
import { FilmDetails } from "@/ui/widgets/FilmDetails";
import { Reviews } from "@/ui/widgets/Reviews";
import { MovieId } from "@/types/movie";

interface IFilmProps {
  movieId: MovieId;
}

export const Film: FC<IFilmProps> = ({ movieId }) => {
  return (
    <div>
      <FilmDetails movieId={movieId} />
      <Reviews movieId={movieId} />
    </div>
  );
};
