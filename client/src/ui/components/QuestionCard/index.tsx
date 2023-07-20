"use client";

import classNames from "classnames";
import styles from "./styles.module.css";
import React, { FC, useState } from "react";
import { Icon } from "@/ui/shared/Icon";

interface IQuestionCard {
  question: string;
  answer: string;
}

export const QuestionCard: FC<IQuestionCard> = ({ question, answer }) => {
  const [isDroppedDown, setIsDroppedDown] = useState<boolean>(false);

  const handleClick = () => {
    setIsDroppedDown((isDroppedDown) => !isDroppedDown);
  };

  const cardStyles = classNames(
    styles.card,
    { [styles["big"]]: isDroppedDown },
    { [styles["small"]]: !isDroppedDown }
  );

  const iconStyles = classNames(styles.icon, { [styles.flip]: isDroppedDown });

  const answerStyles = classNames(styles.answer, {
    [styles["open-answer"]]: isDroppedDown,
  });

  return (
    <div className={cardStyles} onClick={handleClick}>
      <div className={styles.question}>
        <h2>{question}</h2>
        <div className={iconStyles}>
          <Icon type="dropdown" />
        </div>
      </div>
      <p className={answerStyles}>{answer}</p>
    </div>
  );
};
