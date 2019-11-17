export const SERVER_ACTIONS = {
  GET_ALBUMS: "GET_ALBUMS",
  GET_SONGS: "GET_SONGS",
  GET_SONG_FILE: "GET_SONG_FILE",
}

/**
 * Action for requesting list of albums to server
 */
export function getAlbums() {
  return {
    type: SERVER_ACTIONS.GET_ALBUMS
  }
}

/**
 * Action for requesting list of songs to servers
 */
export function getSongs() {
  return {
    type: SERVER_ACTIONS.GET_SONGS
  }
}

/**
 * Action for requesting song file to server
 * @param {String} filePath 
 */
export function getSongFile(filePath) {
  return {
    type: SERVER_ACTIONS.GET_SONG_FILE,
    filePath
  }
}