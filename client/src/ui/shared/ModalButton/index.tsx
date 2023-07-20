import { FC } from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

interface IModalButtonProps {
  onClick: () => void;
  className?: string;
  type: "no" | "yes";
}

export const ModalButton: FC<IModalButtonProps> = ({
  onClick,
  className,
  type,
}) => {
  const buttonStyles = classNames(styles.container, className, {
    [styles.focus]: type === "no",
  });

  return (
    <button onClick={onClick} className={buttonStyles}>
      {type === "no" ? "Нет" : "Да"}
    </button>
  );
};
