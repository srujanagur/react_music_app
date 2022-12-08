const initialState = {
  keyword: "",
  songs: [],
  whishlist: [],
  theme: "light",
  songssort: true,
  time: true,
  filteredData: [],
};
export default function songsReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_SONGS": {
      return {
        ...state,
        songs: action.payload,
      };
    }
    case "SEARCH_KEYWORD": {
      const keyword = action.payload;
      let songs = state.songs.filter((songs) => {
        return songs.title.toLowerCase().search(keyword.toLowerCase()) !== -1;
      });
      return {
        ...state,
        filteredData: songs,
        keyword: keyword,
      };
    }
    case "ADD_TO_WHISHLIST": {
      const song = action.payload;
      return {
        ...state,
        whishlist: [...state.whishlist, song],
      };
    }
    case "DELETE_FROM_WHISHLIST": {
      const song = action.payload;
      return {
        ...state,
        whishlist: state.whishlist.filter(function (item) {
          return item !== song;
        }),
      };
    }
    case "SORT_BY_LANGUAGE":
      return {
        ...state,
        songs: action.payload
          ? [...state.songs].sort((a, b) =>
              a.language.toLowerCase() > b.language.toLowerCase() ? 1 : -1
            )
          : [...state.songs]?.sort((a, b) =>
              a.language.toLowerCase() < b.language.toLowerCase() ? 1 : -1
            ),
        songssort: !state.songssort,
      };
    case "SORT_BY_SINGER_NAME":
      return {
        ...state,
        songs: action.payload
          ? [...state.songs].sort((a, b) =>
              a.singer.toLowerCase() > b.language.toLowerCase() ? 1 : -1
            )
          : [...state.songs]?.sort((a, b) =>
              a.singer.toLowerCase() < b.language.toLowerCase() ? 1 : -1
            ),
        songssort: !state.songssort,
      };

    case "SWITCH_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}
