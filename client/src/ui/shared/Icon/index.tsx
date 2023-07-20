import Image from "next/image";
import { FC } from "react";

interface IIconProps {
  type: "cart" | "plus" | "minus" | "close" | "dropdown";
  size?: number;
}

export const Icon: FC<IIconProps> = ({ type, size = 24 }) => {
  return (
    <Image
      src={`/${type}.svg`}
      alt={type}
      width={size}
      height={size}
      priority
    />
  );
};
