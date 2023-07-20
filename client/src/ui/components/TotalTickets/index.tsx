"use client";

import type { FC } from "react";
import styles from "./styles.module.css";
import { useTotalTicketsAmount } from "@/redux/features/shoppingCart/selectors";

export const TotalTickets: FC = () => {
  const totalTickets = useTotalTicketsAmount();

  return (
    <div className={styles.main}>
      <p className={styles.text}>Итого билетов:</p>
      <span className={styles.text}>{totalTickets}</span>
    </div>
  );
};
