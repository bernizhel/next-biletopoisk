import { FC } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Link className={styles["footer-link"]} href={"/faq"}>
        Вопросы-ответы
      </Link>
      <Link className={styles["footer-link"]} href={"/about"}>
        О нас
      </Link>
    </footer>
  );
};
