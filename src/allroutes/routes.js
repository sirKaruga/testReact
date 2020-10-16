import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './about';
import More from './more';
import Register from './register';
import App from '../App';
import Login from './login';


const Routes = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
    </Route>
    <Route exact path="/login" component={Login} />
  </Router>
);

export default Routes;
