import * as React from 'react';

/**
 * Component used to display album data
 */
function AlbumComponent({ id, name, artist, cover }) {

  return (
    <div {...{ className: "AlbumComponent" }}>
      <div {...{ className: ""}}>{ name }</div>
      <div {...{ className: ""}}>{ artist }</div>
    </div>
  )
}

export default AlbumComponent;