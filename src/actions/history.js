export const HISTORY_ACTIONS = {
  ADD_LISTENED_SONGS_TO_HISTORY: "ADD_LISTENED_SONGS_TO_HISTORY",
  ADD_VISITED_ALBUMS_TO_HISTORY: "ADD_VISITED_ALBUMS_TO_HISTORY",
}

/**
 * Adds a song to list of listened songs in Redux
 * @param {Number} songId Id of the Song listened.
 */
export function addListenedSongsToHistory(songId) {
  return {
    type: HISTORY_ACTIONS.ADD_LISTENED_SONGS_TO_HISTORY,
    songId
  }
}

/**
 * Adds an album to list of visited songs in Redux
 * @param {Number} albumId Id of the Album visited
 */
export function addVisitedAlbumToHistory(albumId) {
  return {
    type: HISTORY_ACTIONS.ADD_VISITED_ALBUMS_TO_HISTORY,
    albumId
  }
}