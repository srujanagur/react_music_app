import { combineReducers } from "redux";
import songsReducer from "./songsReducer";
const rootReducer = combineReducers({
  songsReducer: songsReducer,
});

export default rootReducer;
