"use client";

import styles from "./styles.module.css";
import { Icon } from "@/ui/shared/Icon";
import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";
import { useTotalTicketsAmount } from "@/redux/features/shoppingCart/selectors";

export const Header: FC = () => {
  const totalCount = useTotalTicketsAmount();

  const countStyles = classNames(styles.count, {
    [styles["count-hidden"]]: totalCount <= 0,
  });

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <h1 className={styles["header-title"]}>Билетопоиск</h1>
      </Link>
      <div className={styles.content}>
        <div className={countStyles}>{totalCount}</div>
        <Link href={"/cart"}>
          <Icon type="cart" />
        </Link>
      </div>
    </header>
  );
};
