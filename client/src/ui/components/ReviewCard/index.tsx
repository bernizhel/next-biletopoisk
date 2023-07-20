import { FC } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { IReview } from "@/types/review";

type IReviewCardProps = Omit<IReview, "id"> & {
  avatarUrl?: string;
};

export const ReviewCard: FC<IReviewCardProps> = ({
  name,
  rating,
  text,
  avatarUrl,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={avatarUrl ?? "/avatar.jpeg"}
        width={100}
        height={100}
        alt="Profile Picture"
        loading="lazy"
        className={styles.picture}
      />
      <div className={styles.info}>
        <div className={styles["text-container"]}>
          <p className={styles.text}>
            <b>{name}</b>
          </p>
          <p className={styles.text}>
            Оценка: <b>{rating}</b>
          </p>
        </div>
        <p className={styles.message}>{text}</p>
      </div>
    </div>
  );
};
