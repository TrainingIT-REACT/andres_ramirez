import React, { Component, lazy, Suspense } from 'react';
import NavBar from "../components/NavBar"
const ViewHome = lazy(() => import("../components/ViewHome")) 
const ViewAlbums = lazy(() => import("../components/ViewAlbums")) 
const ViewUserProfile = lazy(() => import("../components/ViewUserProfile")) 
const ViewLogin = lazy(() => import("../components/ViewLogin")) 
const ViewPlayer = lazy(() => import("../components/ViewPlayer")) 
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import { getSongs, getAlbums } from "../actions/server";
// Css
import './App.css';

// Getting state from server
// TODO: Place this logic in the component?
store.dispatch(getSongs())
store.dispatch(getAlbums())

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      albums: []
    }
  }

  async componentDidMount() {
    try {
      const res = await fetch('/albums');
      const json = await res.json();
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
        albums: json
      }));
    } catch(err) {
      console.error("Error accediendo al servidor", err);
    }
  }

  render() {
    return (
      <Provider {...{ store }}>
        <Router>
        <div className="App">
          <NavBar>
              <Link {...{ to: "/"}}>Home</Link>
              <Link {...{ to: "/albums"}}>Albums</Link>
              <Link {...{ to: "/login"}}>Log In</Link>
              <Link {...{ to: "/userProfile"}}>User Profile</Link>
              <Link {...{ to: "/player"}}>Player</Link>
          </NavBar>
          <div>
            <Suspense {...{ fallback: "Loading..."}}>
              <Switch>
                <Route {...{ path:"/", component: ViewHome, exact: true }}/>
                <Route {...{ path:"/albums", component: ViewAlbums }}/>
                <Route {...{ path:"/userProfile", component: ViewUserProfile }}/>
                <Route {...{ path:"/login", component: ViewLogin }}/>
                <Route {...{ path:"/player", component: ViewPlayer }}/>
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
