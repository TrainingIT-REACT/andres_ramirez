import * as React from "react";
import { createPortal } from "react-dom";

const playerNode = document.getElementById("player")

function ViewPlayer() {
  return (
    createPortal(<div>ViewPlayer page</div>, playerNode)
  );
}

export default ViewPlayer;