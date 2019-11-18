import {
  createStore,
  applyMiddleware
} from "redux";

import {
  rootReducer
} from "./reducers/rootReducer";

import { composeWithDevTools } from 'redux-devtools-extension';

import promise from "redux-promise-middleware";

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(promise)
  )
)