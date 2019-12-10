import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const playerNode = document.getElementById("player")

function ViewPlayer() {

  const { songId } = useSelector(state => state.player)
  const { songs } = useSelector(state => state.server)


  if(songId && (songId in songs)) {
    const { audio: audioSrc } = songs[songId];
    return (
      createPortal(
      <div {...{ className: "player"}}>
        <audio {...{ controls: true }}>
          <source {...{ 
            src: audioSrc,
            type: "audio/mpeg"
          }}/>
        </audio>
      </div>, 
      playerNode)
    );
  } else {
    return null
  }


}

export default ViewPlayer;