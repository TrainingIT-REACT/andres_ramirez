import * as React from "react"
import { useSelector } from "react-redux";
import SongComponent from "../SongComponent";


/**
 * Home view. This view must contain recommended songs.
 * Recommend all by default
 * Reading value from Redux Store. Using Redux hooks.
 * @see https://react-redux.js.org/next/api/hooks
 */
function ViewHome() {
  // https://react-redux.js.org/next/api/hooks#useselector-examples
  const songs = useSelector(state => state.server.songs);
  return <div {...{ className: "ViewHome"}}>
    {
      Object.values(songs).map(song => (<SongComponent {...{...song}}/>))
    }
  </div>;
}

export default ViewHome;