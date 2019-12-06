import * as React from "react"
import { useSelector } from "react-redux";
import AlbumComponent from "../AlbumComponent";

/**
 * View where all albums are displayed
 * Getting albums from Redux Store. Using Redux hooks.
 * @see https://react-redux.js.org/next/api/hooks
 */
function ViewAlbums() {
  const albums = useSelector(state => state.server.albums)
  return(
    <div {...{ className: "ViewAlbums" }}>
      {
        Object.values(albums).map((album, key) => 
          (<AlbumComponent {...{...album, key}}/>))
      }
    </div>
  )
}

export default ViewAlbums;