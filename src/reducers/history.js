import {
  HISTORY_ACTIONS
} from '../actions/history';

const initialState = {
  listenedSongsHistory: [],
  visitedAlbumsHistory: []
}

export const historyReducer = (state = initialState, action) => {
  const {
    type
  } = action;

  switch (type) {
    case HISTORY_ACTIONS.ADD_LISTENED_SONGS_TO_HISTORY:
      const {
        listenedSongsHistory
      } = state;
      const {
        songId
      } = action;

      return {
        ...state,
        listenedSongsHistory: [...listenedSongsHistory, songId]
      }

      case HISTORY_ACTIONS.ADD_VISITED_ALBUMS_TO_HISTORY:
        const {
          visitedAlbumsHistory
        } = state;
        const {
          albumId
        } = action;

        return {
          ...state,
          visitedAlbumsHistory: [...visitedAlbumsHistory, albumId]
        }

        default:
          return state
  }
}