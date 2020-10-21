import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/about';
import More from './pages/more';
import Register from './pages/register';
import Home from './pages/home';
import Topnav from './components/topnav';
import Login from './pages/login'

function App (){
  return (
    <div className="App">

    <Topnav />

      <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route path="/">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/More" component={More} />
            <Route exact path="/Register" component={Register} />
        </Route>
        <Route exact path="/login" component={Login} />
        </Switch>
      </Router>





    </div>
  );
}


export default App;
