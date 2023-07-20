import { IShoppingCart } from "./model";
import { MovieId } from "@/types/movie";
import { useTypedSelector } from "@/redux/useTypedSelector";

export const useShoppingCart = (): IShoppingCart =>
  useTypedSelector((state) => state.shoppingCart);

export const useTicketAmount = (movieId: MovieId): number =>
  useShoppingCart()[movieId] || 0;

export const useTotalTicketsAmount = (): number =>
  Object.values(useShoppingCart()).reduce(
    (accumulator, ticketsCount) => accumulator + ticketsCount,
    0
  ) || 0;
