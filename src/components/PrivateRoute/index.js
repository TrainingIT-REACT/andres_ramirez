import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

 
const PrivateRoute = ({ component: Component }) => {
  const { signedIn } = useSelector(state => state.user);
  console.log(signedIn)
  return (
    <Route {...{
      render: (props) => signedIn ? 
        (<Component {...props}/>) :
        (<Redirect {...{ to: { 
          pathname: "/login",
          state: {
            message: "Por favor, haz login primero"
          }
        }}}/>)
    }}>
    </Route>
  )
}

export default PrivateRoute;