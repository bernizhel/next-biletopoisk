import { FC } from "react";
import styles from "./styles.module.css";
import { FilmsList } from "@/ui/widgets/FilmsList";
import { Filter } from "@/ui/widgets/Filter";

export const Main: FC = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <FilmsList />
    </div>
  );
};
