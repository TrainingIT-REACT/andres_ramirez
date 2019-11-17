import React, { Component } from 'react';
import NavBar from "../components/NavBar"
import ViewHome from "../components/ViewHome"
import ViewAlbums from "../components/ViewAlbums"
import ViewUserProfile from "../components/ViewUserProfile"
import ViewLogin from "../components/ViewLogin"
import ViewPlayer from "../components/ViewPlayer"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
// Css
import './App.css';

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
            <Switch>
              <Route {...{ path:"/", component: ViewHome, exact: true }}/>
              <Route {...{ path:"/albums", component: ViewAlbums }}/>
              <Route {...{ path:"/userProfile", component: ViewUserProfile }}/>
              <Route {...{ path:"/login", component: ViewLogin }}/>
              <Route {...{ path:"/player", component: ViewPlayer }}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
