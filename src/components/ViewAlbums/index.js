import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import AlbumComponent from "../AlbumComponent";
import { useDispatch } from 'react-redux';
import { getAlbums } from '../../actions/server';
import { Route, Link } from "react-router-dom";

/**
 * View where all albums are displayed
 * Getting albums from Redux Store. Using Redux hooks.
 * @see https://react-redux.js.org/next/api/hooks
 */
function ViewAlbums() {
  // Redux dispatch hook
  // @see https://react-redux.js.org/next/api/hooks#usedispatch
  const dispatch = useDispatch();
  // Only fetch when componentDidMount
  useEffect(() => {
    // When we are working with promises, it is recommended
    // to create the async funcion inside and call it immediately
    // @see https://github.com/facebook/react/issues/14326
    const asyncGetAlbums = async () => {
      dispatch(await getAlbums())
    }
    asyncGetAlbums()
  }, [dispatch])

  const albums = useSelector(state => state.server.albums)

  return(
    <div {...{ className: "ViewAlbums" }}>
      {
        albums && Object.values(albums).map((album, key) => (
          <Link {...{ to: `/album/${album.id}`, key}}>
            <AlbumComponent {...{
              ...album
            }}/>
          </Link>)) 
          }
    </div>
  )
}

export default ViewAlbums;