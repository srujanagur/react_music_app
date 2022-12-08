export function getSongs(songs) {
  return {
    type: "GET_SONGS",
    payload: songs,
  };
}
export function searchForKeyword(keyword) {
  return {
    type: "SEARCH_KEYWORD",
    payload: keyword,
  };
}
export function addToWhishlist(song) {
  return {
    type: "ADD_TO_WHISHLIST",
    payload: { song },
  };
}
export function deleteFromWhishList(song) {
  return {
    type: "DELETE_FROM_WHISHLIST",
    payload: { song },
  };
}
export function sortByLanguage(songssort) {
  return {
    type: "SORT_BY_LANGUAGE",
    payload: songssort,
  };
}

export function sortBysong(songssort) {
  return {
    type: "SORT_BY_SINGER_NAME",
    payload: songssort,
  };
}
export function switchTheme() {
  return {
    type: "SWITCH_THEME",
  };
}

export function fetchSongs() {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/songs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        dispatch(getSongs(data));
      });
  };
}
