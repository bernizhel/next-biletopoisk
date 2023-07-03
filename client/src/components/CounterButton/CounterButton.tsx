import { FunctionComponent } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './styles.module.css';

interface CounterButtonProps {
  variant: 'plus' | 'minus';
  disabled: boolean;
  action: () => void;
}

export const CounterButton: FunctionComponent<CounterButtonProps> = ({
  variant,
  disabled,
  action,
}) => {
  return (
    <button className={styles['counter-button']} onClick={action} disabled={disabled}>
      <Icon variant={variant} size={12} />
    </button>
  );
};
