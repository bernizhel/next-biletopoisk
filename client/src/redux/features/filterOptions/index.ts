import { createSlice } from "@reduxjs/toolkit";
import { IFilterOptions } from "./model";

const initialState: IFilterOptions = {
  genre: null,
  cinemaId: null,
  title: "",
};

const filterOptionsSlice = createSlice({
  name: "filterOptions",
  initialState,
  reducers: {
    setGenre: (state, { payload }: { payload: IFilterOptions["genre"] }) => {
      state.genre = payload;
    },
    setCinemaId: (
      state,
      { payload }: { payload: IFilterOptions["cinemaId"] }
    ) => {
      state.cinemaId = payload;
    },
    setTitle: (state, { payload }: { payload: IFilterOptions["title"] }) => {
      state.title = payload;
    },
  },
});

export const { setGenre, setCinemaId, setTitle } = filterOptionsSlice.actions;
export const filterOptionsReducer = filterOptionsSlice.reducer;
