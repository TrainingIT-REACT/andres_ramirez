import {
  createAsyncAction
} from "redux-promise-middleware-actions";

export const SERVER_ACTIONS = {
  GET_ALBUMS: "GET_ALBUMS",
  GET_SONGS: "GET_SONGS",
}

/**
 * Action for requesting list of albums to server
 */
export const getAlbums = createAsyncAction(SERVER_ACTIONS.GET_ALBUMS, async () => {
  const res = await fetch("/albums", {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  const payload = await res.json()
  return {
    type: SERVER_ACTIONS.GET_ALBUMS,
    payload
  }
})

/**
 * Action for requesting list of songs to servers
 */
export const getSongs = createAsyncAction(SERVER_ACTIONS.GET_SONGS, async () => {
  const res = await fetch("/songs")
  const payload = await res.json()
  return {
    type: SERVER_ACTIONS.GET_SONGS,
    payload
  }
})