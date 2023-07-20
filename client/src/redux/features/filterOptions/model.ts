import { CinemaId } from "@/types/cinema";
import { Genre } from "@/types/movie";

export interface IFilterOptions {
  genre: Genre | null;
  cinemaId: CinemaId | null;
  title: string;
}
