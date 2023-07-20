import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartReducer } from "@/redux/features/shoppingCart";
import { filterOptionsReducer } from "@/redux/features/filterOptions";
import { api } from "@/redux/services/api";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    filterOptions: filterOptionsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([api.middleware]),
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
