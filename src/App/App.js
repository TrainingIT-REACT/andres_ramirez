import React, { lazy, Suspense } from 'react';
import NavBar from "../components/NavBar"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import PrivateRoute from '../components/PrivateRoute';
import ViewAlbum from '../components/ViewAlbum'
// Css
import './App.css';
const ViewHome = lazy(() => import("../components/ViewHome"))
const ViewAlbums = lazy(() => import("../components/ViewAlbums"))
// const ViewAlbum = lazy(() => import("../components/ViewAlbum"))
const ViewUserProfile = lazy(() => import("../components/ViewUserProfile"))
const ViewLogin = lazy(() => import("../components/ViewLogin"))
const ViewPlayer = lazy(() => import("../components/ViewPlayer"))

function App() {
  return (
    <Provider {...{ store }}>
      <Router>
        <div className="App">
          <NavBar>
            <Link {...{ to: "/" }}>Home</Link>
            <Link {...{ to: "/albums" }}>Albums</Link>
            <Link {...{ to: "/login" }}>Log In</Link>
            <Link {...{ to: "/userProfile" }}>User Profile</Link>
          </NavBar>
          <section>
            <Suspense {...{ fallback: "Loading..." }}>
              <Switch>
                <Route {...{ path: "/", component: ViewHome, exact: true }} />
                <Route {...{ path: "/albums", component: ViewAlbums }} />
                <Route {...{ path: "/album/:id", component: ViewAlbum }} />
                <PrivateRoute {...{ path: "/userProfile", component: ViewUserProfile }} />
                <Route {...{ path: "/login", component: ViewLogin }} />
              </Switch>
              <ViewPlayer />
            </Suspense>
          </section>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
