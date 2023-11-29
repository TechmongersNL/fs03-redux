import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favoriteValue: false
  },
  reducers: {
    toggle: (state) => {
      state.favoriteValue = !state.favoriteValue;
    }
  },
});

export const { toggle } = favoriteSlice.actions;
export default favoriteSlice.reducer; 