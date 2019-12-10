import { combineReducers } from "redux";

import { historyReducer } from "./history";
import { userReducer } from "./user";
import { serverReducer } from "./server";
import { playerReducer } from "./player";

export const rootReducer = combineReducers({
  history: historyReducer,
  user: userReducer,
  server: serverReducer,
  player: playerReducer
});
