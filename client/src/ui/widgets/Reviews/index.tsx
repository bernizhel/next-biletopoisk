"use client";

import { useGetReviewsForMovieQuery } from "@/redux/services/api";
import { FC } from "react";
import { ReviewCard } from "@/ui/components/ReviewCard";
import { Loader } from "@/ui/shared/Loader";
import styles from "./styles.module.css";

interface IReviewsProps {
  movieId: string;
}

export const Reviews: FC<IReviewsProps> = ({ movieId }) => {
  const { data, isLoading, error } = useGetReviewsForMovieQuery(movieId);

  if (isLoading) {
    return <Loader className={styles.card} />;
  }

  if (!data || error) {
    return null;
  }

  return (
    <div>
      {data.map((review) => (
        <ReviewCard
          key={review.id}
          name={review.name}
          rating={review.rating}
          text={review.text}
        />
      ))}
    </div>
  );
};
