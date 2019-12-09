import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "../../actions/server"

function ViewAlbum({ match }) {

  const id = match.params.id

  const dispatch = useDispatch()

  // We need to fetch Albums, because we may get to this view
  // using routes
  useEffect(() => {
    const asyncGetAlbums = async () => {
      dispatch(await getAlbums())
    }
    asyncGetAlbums()
  }, [ false ])

  const album = useSelector(state => state.server.albums[id])

  if(!album) {
    return null
  }

  const { name, artist, cover } = album;

  return <div {...{
    className: "ViewAlumb"
  }}>
    <img {...{
      src: cover,
      width: 500,
      height: 500
    }} />,
    <div {...{ className: ""}}> {name} </div>
    <div {...{ className: ""}}> {artist} </div>
  </div>;
}

export default ViewAlbum;