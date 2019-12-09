import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addListenedSongsToHistory } from "../../actions/history";

/**
 * Component used to display Song data
 * @param {number}  id    Song id
 * @param {string}  name  Song name
 * @param {string}  audio Song path  
 * @param {number}  seconds Song duration  
 * @param {number}  album_id  Album related id  
 */
function SongComponent({ id, name, audio, seconds, album_id }) {

  const dispatch = useDispatch()

  // Getting album information from Redux Store
  const { name: albumName, artist } = 
    useSelector(state => state.server && state.server.albums[album_id] || "");

  return (
    <div {...{ 
      className: "SongComponent",
      onClick: () => {
        dispatch(addListenedSongsToHistory(id))
      }
    }}>
      <div {...{ className: "" }}>{ name }</div>
      <div {...{ className: "" }}>{ audio }</div>
      <div {...{ className: "" }}>{ seconds }</div>
      <div {...{ className: "" }}>{ albumName }</div>
      <div {...{ className: "" }}>{ artist }</div>
    </div>
  )
}

export default SongComponent;