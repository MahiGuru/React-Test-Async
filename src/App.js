import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import {Provider} from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm';
import store from './store';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div  className="App">
            <nav>
              <ul>
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
      </Provider>
    );
  }
}

export default App;
