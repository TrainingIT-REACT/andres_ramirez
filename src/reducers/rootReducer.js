import { combineReducers } from "redux";

import { historyReducer } from "./history";
import { userReducer } from "./user";
import { serverReducer } from "./server";

export const rootReducer = combineReducers({
  history: historyReducer,
  user: userReducer,
  server: serverReducer
});
