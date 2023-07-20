"use client";

import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useGetCinemasQuery } from "@/redux/services/api";
import { setCinemaId } from "@/redux/features/filterOptions";
import Select from "react-select";
import { SelectOption } from "@/types/SelectOption";
import { IFilterOptions } from "@/redux/features/filterOptions/model";
import { Loader } from "@/ui/shared/Loader";
import styles from "./styles.module.css";
import { useFilterOptions } from "@/redux/features/filterOptions/selectors";

const DEFAULT_OPTIONS: SelectOption<IFilterOptions["cinemaId"]>[] = [
  {
    label: "Не выбрано",
    value: null,
  },
];

export const FilterCinema: FC = () => {
  const { data, isLoading, error } = useGetCinemasQuery();
  const [cinemaSelectOptions, setCinemaSelectOptions] = useState<
    SelectOption<IFilterOptions["cinemaId"]>[]
  >([]);

  const { cinemaId } = useFilterOptions();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setCinemaSelectOptions(
        data.map((cinema) => ({ value: cinema.id, label: cinema.name }))
      );
    }
  }, [data]);

  if (isLoading) {
    return <Loader className={styles.loader} />;
  }

  if (!data || error) {
    return <span>Произошла ошибка</span>;
  }

  return (
    <Select
      placeholder="Выберите кинотеатр"
      options={
        isLoading
          ? DEFAULT_OPTIONS
          : DEFAULT_OPTIONS.concat(cinemaSelectOptions)
      }
      value={cinemaSelectOptions.find(
        (cinemaSelectOption) => cinemaSelectOption.value === cinemaId
      )}
      isLoading={isLoading}
      onChange={(cinemaSelectOption) =>
        dispatch(setCinemaId(cinemaSelectOption?.value ?? null))
      }
    />
  );
};
