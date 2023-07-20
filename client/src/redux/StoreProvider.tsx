"use client";

import { store } from "@/redux/store";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

interface IStoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
