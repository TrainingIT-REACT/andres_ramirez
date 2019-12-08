import React, { useState } from "react"
import { setUserProperties } from "../../actions/user"
import { useDispatch } from "react-redux";



/**
 * Login page
 */
function ViewLogin({ location }) {

  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return(
    <>
      { location.state && 
        location.state.message && 
        <p>{ location.state.message }</p>}
      <form {...{ 
          className: "ViewLogin", 
          onSubmit: (event) => { 
            event.preventDefault()
            dispatch(setUserProperties({ username, password }))
            setUsername("")
            setPassword("")
          }}}>
        <div>
          <label {...{ htmlFor: "user"}}> Username </label>
          <input {...{ 
            type: "text",
            name: "user",
            id: "user",
            onChange: (event) => setUsername(event.target.value),
            value: username
          }} />
        </div>
        <div> 
          <label {...{ htmlFor: "password"}}> Password </label>
          <input {...{ 
            type: "password",
            name: "password",
            id: "password",
            onChange: (event) => setPassword(event.target.value),
            value: password
          }} />
        </div>
        <input {...{ type: "submit" , value: "Log In" }}/>
      </form>
    </>
  )
}

export default ViewLogin;