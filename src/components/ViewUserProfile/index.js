import * as React from "react"
import { useSelector } from 'react-redux';

function ViewUserProfile() {

  const { username } = useSelector(state => state.user)

  return (<div {...{ className: "UserProfile"}}> 
    <p>
      <span>Nombre del usuario: </span>
      <span>{ username } </span>
    </p>
  </div>);
}

export default ViewUserProfile;