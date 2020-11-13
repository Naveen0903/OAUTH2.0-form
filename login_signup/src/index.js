import React from 'react';
import ReactDOM from 'react-dom';
import { 
        BrowserRouter as Router,
        Switch,
        Route } from 'react-router-dom';
import './index.css';
import Signin from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import './App.css';

// import Signup from "./components/signup";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path="/profile" component={Profile}/>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
