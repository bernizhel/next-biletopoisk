import { FunctionComponent } from 'react';

import Image from 'next/image';

interface IconProps {
  variant: 'close' | 'basket' | 'plus' | 'minus' | 'arrow' | 'photo';
  size?: number;
  color?: string;
}

export const Icon: FunctionComponent<IconProps> = ({ variant, size = 32, color = '' }) => {
  return <Image src={`/images/icons/${variant}.svg`} alt={variant} width={size} height={size} />;
};
