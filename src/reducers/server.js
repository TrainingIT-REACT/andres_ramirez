import { getAlbums, getSongs } from "../actions/server";
import { keyBy } from "lodash";

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
        albums: keyBy(payload.payload, "id")
      }
    case getSongs.fulfilled.toString():
      return {
        ...state,
        songs: keyBy(payload.payload, "id")
      }
    default:
      return state
  }
}