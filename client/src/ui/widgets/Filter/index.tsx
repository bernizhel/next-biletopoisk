"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import styles from "./styles.module.css";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { setGenre, setTitle } from "@/redux/features/filterOptions";
import { genreMapping } from "@/redux/services/translator";
import { SelectOption } from "@/types/SelectOption";
import { FilterCinema } from "@/ui/components/FilterCinema";
import { IFilterOptions } from "@/redux/features/filterOptions/model";
import { useFilterOptions } from "@/redux/features/filterOptions/selectors";

const DEFAULT_OPTIONS: SelectOption<IFilterOptions["genre"]>[] = [
  {
    label: "Не выбрано",
    value: null,
  },
];

const GENRE_OPTIONS: SelectOption<IFilterOptions["genre"]>[] =
  DEFAULT_OPTIONS.concat(
    Object.values(genreMapping).map((key) => ({
      value: key,
      label: key,
    }))
  );

const DEBOUNCE_TIMEOUT = 750;

export const Filter: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { title, genre } = useFilterOptions();

  const [shownTitle, setShownTitle] = useState<string>(title);

  // eslint-disable-next-line no-undef
  let titleDebounce = useRef<NodeJS.Timeout>();
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShownTitle(e.target.value);

    if (titleDebounce.current) {
      clearTimeout(titleDebounce.current);
    }

    titleDebounce.current = setTimeout(() => {
      dispatch(setTitle(e.target.value));
      titleDebounce.current = undefined;
    }, DEBOUNCE_TIMEOUT);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.title}>Фильтр поиска</div>
      <div className={styles["filter-type"]}>
        <form>
          <p className={styles["filter-type-title"]}>Название</p>
          <input
            className={styles["filter-input"]}
            placeholder="Введите название"
            onChange={handleTitleChange}
            value={shownTitle}
          />
        </form>
      </div>
      <div className={styles["filter-type"]}>
        <p className={styles["filter-type-title"]}>Жанр</p>
        <Select
          options={GENRE_OPTIONS}
          placeholder="Выберите жанр"
          value={GENRE_OPTIONS.find((option) => option.value === genre)}
          onChange={(genreSelectOption) =>
            dispatch(setGenre(genreSelectOption?.value ?? null))
          }
        />
      </div>
      <div className={styles["filter-type"]}>
        <p className={styles["filter-type-title"]}>Кинотеатр</p>
        <FilterCinema />
      </div>
    </div>
  );
};
