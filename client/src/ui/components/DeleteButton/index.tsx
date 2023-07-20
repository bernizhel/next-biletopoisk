"use client";

import { FC, useState } from "react";
import { Icon } from "@/ui/shared/Icon";
import { MovieId } from "@/types/movie";
import styles from "./styles.module.css";
import { ModalWindow } from "@/ui/widgets/ModalWindow";

interface IDeleteButtonProps {
  movieId: MovieId;
}

export const DeleteButton: FC<IDeleteButtonProps> = ({ movieId }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div onClick={() => setShowModal(true)} className={styles.container}>
        <Icon type="close" />
      </div>
      <ModalWindow
        showModal={showModal}
        setShowModal={setShowModal}
        movieId={movieId}
      />
    </>
  );
};
