import * as React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addListenedSongsToHistory } from "../../actions/history";
import { playSong } from '../../actions/player';

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
        dispatch(playSong(id))
      },
      "data-test": "song-component"
    }}>
      <div {...{ className: "", "data-test": "song-name" }}>{ name }</div>
      <div {...{ className: "", "data-test": "audio"}}>{ audio }</div>
      <div {...{ className: "", "data-test": "seconds" }}>{ seconds }</div>
      <div {...{ className: "", "data-test": "albumName" }}>{ albumName }</div>
      <div {...{ className: "", "data-test": "artist" }}>{ artist }</div>
    </div>
  )
}

export default SongComponent;