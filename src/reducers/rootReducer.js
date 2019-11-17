import { combineReducers } from "redux";

import { historyReducer } from "./history";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  history: historyReducer,
  user: userReducer
});
