export const PLAYER_ACTIONS = {
  PLAY: "PLAY",
  STOP: "STOP",
}

/**
 * Action to start playing a song
 * @param {number} songId SongId to play
 */
export function playSong(songId) {
  return {
    type: PLAYER_ACTIONS.PLAY,
    songId
  }
}

export function stopPlaying() {
  return {
    type: PLAYER_ACTIONS.STOP
  }
}