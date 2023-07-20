"use client";

import { useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/features/shoppingCart";
import styles from "./styles.module.css";
import { FC, useState } from "react";
import { Icon } from "@/ui/shared/Icon";
import { AppDispatch } from "@/redux/store";
import { MovieId } from "@/types/movie";
import { ModalWindow } from "@/ui/widgets/ModalWindow";
import { useTicketAmount } from "@/redux/features/shoppingCart/selectors";

interface ITicketCounter {
  movieId: MovieId;
}

export const TicketCounter: FC<ITicketCounter> = ({ movieId }) => {
  const dispatch: AppDispatch = useDispatch();

  const ticketAmount = useTicketAmount(movieId);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handelDecrementButtonClick = () => {
    if (ticketAmount === 1) {
      setShowModal(true);
    } else {
      dispatch(decrement(movieId));
    }
  };

  return (
    <div className={styles.container}>
      <button
        disabled={ticketAmount === 0}
        className={styles.button}
        onClick={handelDecrementButtonClick}
      >
        <Icon type="minus" size={12} />
      </button>
      <span className={styles.number}>{ticketAmount}</span>
      <button
        disabled={ticketAmount === 30}
        className={styles.button}
        onClick={() => dispatch(increment(movieId))}
      >
        <Icon type="plus" size={12} />
      </button>
      <ModalWindow
        showModal={showModal}
        setShowModal={setShowModal}
        movieId={movieId}
      />
    </div>
  );
};
