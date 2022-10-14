import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  songs: [],
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSongs: (state, action) => {
      state.songs = action.payload;
    },
  },
});

export const { addSongs } = songsSlice.actions;
export const getAllSongs = (state) => state.songs.songs;
export default songsSlice.reducer;
