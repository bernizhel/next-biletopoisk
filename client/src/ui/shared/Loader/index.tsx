import { FC } from "react";

import styles from "./styles.module.css";
import classNames from "classnames";

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
  const loaderStyles = classNames(styles.container, className);
  return (
    <div className={loaderStyles}>
      <div className={styles.loader}></div>
    </div>
  );
};
