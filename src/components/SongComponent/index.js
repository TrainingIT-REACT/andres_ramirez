import * as React from 'react';

/**
 * Component used to display Song data
 * @param {number}  id    Song id
 * @param {string}  name  Song name
 * @param {string}  audio Song path  
 * @param {number}  seconds Song duration  
 * @param {number}  album_id  Album related id  
 */
function SongComponent({ id, name, audio, seconds, album_id }) {
  return (
    <div {...{ className: "SongComponent"}}>
      <div {...{ className: "" }}>{ id }</div>
      <div {...{ className: "" }}>{ name }</div>
      <div {...{ className: "" }}>{ audio }</div>
      <div {...{ className: "" }}>{ seconds }</div>
      <div {...{ className: "" }}>{ album_id }</div>
    </div>
  )
}

export default SongComponent;