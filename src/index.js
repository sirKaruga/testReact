import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './allroutes/login'


ReactDOM.render((

  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
    </Route>
    <Route exact path="/login" component={Login} />
  </Router>

),
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
