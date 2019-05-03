import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import {Provider} from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';
import Login from './components/Login';
import UserProfile from './components/UserProfile';

import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';


const keycloak = new Keycloak('/keycloak.json');
class App extends Component { 
  componentDidMount() {
    // this.keycloak = Keycloak('/keycloak.json'); 
    // this.keycloak.init({onLoad: 'check-sso'}).success(authenticated => {
    //   this.setState({ keycloak: this.keycloak, authenticated: authenticated });
    // }).error((err,xhr) => {
    //   console.log(err, xhr);
    // }); 
  }
  render() {
    return (
      <Provider store={store}>
        <KeycloakProvider keycloak={keycloak}>
          <UserProfile></UserProfile>
          <Router>
            <div  className="App">
              <nav>
                <ul className="menu-list">
                  <li>
                    <Link to="/posts">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/create/">Create Post</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={Login} />
              <Route path="/posts" exact component={Posts} />
              <Route path="/create/" component={PostForm} />
            </div>
          </Router>
        </KeycloakProvider>
      </Provider>
    );
  }
}

export default App;
