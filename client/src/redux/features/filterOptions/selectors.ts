import { IFilterOptions } from "./model";
import { useTypedSelector } from "@/redux/useTypedSelector";

export const useFilterOptions = (): IFilterOptions =>
  useTypedSelector((state) => state.filterOptions);
