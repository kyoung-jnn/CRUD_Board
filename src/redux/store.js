import { createStore, combineReducers } from "redux";
import { userState_ruducer, board_reducer } from "./reducer";

const reducers = combineReducers({
  userState_ruducer,
  board_reducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // chrome devtool 이용
);

export default store;
