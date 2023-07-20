"use client";

import { FC } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { remove } from "@/redux/features/shoppingCart";
import { ModalButton } from "@/ui/shared/ModalButton";
import styles from "./styles.module.css";
import { AppDispatch } from "@/redux/store";
import { MovieId } from "@/types/movie";
import { Icon } from "@/ui/shared/Icon";

interface IModalProps {
  showModal: boolean;
  // eslint-disable-next-line no-unused-vars
  setShowModal: (newValue: boolean) => void;
  movieId: MovieId;
}

export const ModalWindow: FC<IModalProps> = ({
  showModal,
  setShowModal,
  movieId,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const onYesHandle = () => {
    dispatch(remove(movieId));
    setShowModal(false);
  };

  return (
    <>
      {showModal &&
        createPortal(
          <div onClick={() => setShowModal(false)} className={styles.container}>
            <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
              <div className={styles.row}>
                <div className={styles.title}>Удаление билета</div>
                <div
                  className={styles.close}
                  onClick={() => setShowModal(false)}
                >
                  <Icon type="close" />
                </div>
              </div>
              <div className={styles.question}>
                Вы уверены, что хотите удалить билет?
              </div>
              <div className={styles.buttons}>
                <ModalButton onClick={onYesHandle} type="yes" />
                <ModalButton
                  onClick={() => setShowModal(false)}
                  className={styles.next}
                  type="no"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
