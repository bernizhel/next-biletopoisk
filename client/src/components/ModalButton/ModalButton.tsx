import { FunctionComponent } from 'react';
import styles from './styles.module.css';

interface ModalButtonProps {
  variant: 'yes' | 'no';
}

export const ModalButton: FunctionComponent<ModalButtonProps> = ({ variant }) => {
  return <button className={styles[variant]}>{variant === 'yes' ? 'Да' : 'Нет'}</button>;
};
