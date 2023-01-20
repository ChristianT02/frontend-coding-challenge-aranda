import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../slices/recipes";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
