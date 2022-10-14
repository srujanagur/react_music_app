import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../reducer";

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
});
