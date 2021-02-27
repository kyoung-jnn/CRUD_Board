import { createStore } from "redux";
import board_reducer from "./reducer";

// reducer
export default createStore(
  board_reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome devtool 이용
);
