import { createSlice } from "@reduxjs/toolkit";
import { IShoppingCart } from "./model";
import { MovieId } from "@/types/movie";

const initialState: IShoppingCart = {};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    increment: (state, { payload }: { payload: MovieId }) => {
      const count = state[payload] || 0;
      if (count >= 30) return;
      state[payload] = count + 1;
    },

    decrement: (state, { payload }: { payload: MovieId }) => {
      const count = state[payload];

      if (!count) return;

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },

    remove: (state, { payload }: { payload: MovieId }) => {
      delete state[payload];
    },
  },
});

export const shoppingCartReducer = shoppingCartSlice.reducer;
export const { increment, decrement, remove } = shoppingCartSlice.actions;
