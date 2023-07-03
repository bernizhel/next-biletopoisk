'use client';

import { FunctionComponent, useState } from 'react';
import { CounterButton } from '../CounterButton/CounterButton';

interface CounterProps {
  minimalValue: number;
  maximumValue: number;
}

export const Counter: FunctionComponent<CounterProps> = ({ minimalValue, maximumValue }) => {
  let [count, setCount] = useState(minimalValue);
  return (
    <div>
      <CounterButton
        variant='minus'
        disabled={count <= minimalValue}
        action={() => setCount(count - 1)}
      />
      <span>{count}</span>
      <CounterButton
        variant='plus'
        disabled={count >= maximumValue}
        action={() => setCount(count + 1)}
      />
    </div>
  );
};
