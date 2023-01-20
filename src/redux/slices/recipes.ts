import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  label: "",
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    change: (state, action) => {
      state.data = action.payload.data;
      state.label = action.payload.label;
    },
  },
});

export const { change } = recipesSlice.actions;

export default recipesSlice.reducer;
