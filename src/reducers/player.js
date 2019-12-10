import {
  PLAYER_ACTIONS
} from "../actions/player";

const initialState = {
  songId: null
}

/**
 * Reducer for player properties
 */
export const playerReducer = (state = initialState, action) => {
  const {
    type
  } = action;

  switch(type) {
    case PLAYER_ACTIONS.PLAY:
      const { songId } = action;
      return {
        ...state,
        songId
      }

    case PLAYER_ACTIONS.STOP:
        return {
          ...state,
          songId: null
        }
    default:
      return state
  }
}