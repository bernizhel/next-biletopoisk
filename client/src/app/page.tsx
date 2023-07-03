import { Counter } from '@/components/Counter/Counter';
import './globals.css';
import { ModalButton } from '@/components/ModalButton/ModalButton';

export default function Home() {
  return (
    <>
      <Counter minimalValue={0} maximumValue={30} />
      <ModalButton variant='yes' />
      <ModalButton variant='no' />
    </>
  );
}
