//TODO: We need asyncronous libraries for Redux to implement this.
import { getAlbums, getSongs } from "../actions/server";
import { chain } from "lodash";

const initialState = {
  albums: {},
  songs: {}
}

export const serverReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case getAlbums.fulfilled.toString():
      return {
        ...state,
        albums: chain(payload.payload).keyBy("id").value()
      }
    case getSongs.fulfilled.toString():
      return {
        ...state,
        songs: chain(payload.payload).keyBy("id").value()
      }
    default:
      return state
  }
}