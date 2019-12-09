import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import SongComponent from "../SongComponent";
import { getSongs, getAlbums } from "../../actions/server"


/**
 * Home view. This view must contain recommended songs.
 * Recommend all by default
 * Reading value from Redux Store. Using Redux hooks.
 * @see https://react-redux.js.org/next/api/hooks
 */
function ViewHome() {

  const dispatch = useDispatch()

  // Redux dispatch hook
  useEffect(() => {
    // In the main view, we need both songs and albums info.
    // We fetch them both.
    const asyncGetServerData = async () => {
      dispatch(await getSongs())
      dispatch(await getAlbums())
    }
    asyncGetServerData()
  }, [ false ])

  // https://react-redux.js.org/next/api/hooks#useselector-examples
  const songs = useSelector(state => state.server.songs);
  return <div {...{ className: "ViewHome"}}>
    {
      Object.values(songs)
        .map((song, key) => (<SongComponent {...{...song, key }}/>))
    }
  </div>;
}

export default ViewHome;