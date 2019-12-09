import React, { lazy, Suspense } from 'react';
import NavBar from "../components/NavBar"
const ViewHome = lazy(() => import("../components/ViewHome")) 
const ViewAlbums = lazy(() => import("../components/ViewAlbums")) 
const ViewUserProfile = lazy(() => import("../components/ViewUserProfile")) 
const ViewLogin = lazy(() => import("../components/ViewLogin")) 
const ViewPlayer = lazy(() => import("../components/ViewPlayer")) 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "../store";
import { getSongs } from "../actions/server";
import PrivateRoute from '../components/PrivateRoute';
// Css
import './App.css';

function App() {
  return (
    <Provider {...{ store }}>
      <Router>
      <nav className="App">
        <NavBar>
            <Link {...{ to: "/"}}>Home</Link>
            <Link {...{ to: "/albums"}}>Albums</Link>
            <Link {...{ to: "/login"}}>Log In</Link>
            <Link {...{ to: "/userProfile"}}>User Profile</Link>
            <Link {...{ to: "/player"}}>Player</Link>
        </NavBar>
        </nav>
        <main>
          <Suspense {...{ fallback: "Loading..."}}>
            <Switch>
              <Route {...{ path:"/", component: ViewHome, exact: true }}/>
              <Route {...{ path:"/albums", component: ViewAlbums }}/>
              <PrivateRoute {...{ path:"/userProfile", component: ViewUserProfile }}/>
              <Route {...{ path:"/login", component: ViewLogin }}/>
              <Route {...{ path:"/player", component: ViewPlayer }}/>
            </Switch>
          </Suspense>
        </main>
    </Router>
  </Provider>
  );
}

export default App;
