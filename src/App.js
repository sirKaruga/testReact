import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import About from './pages/about';
import More from './pages/more';
import Register from './pages/register';
import Home from './pages/home';
import Topnav from './components/topnav';
import Login from './pages/login'
import BottomNav from './components/bottomNav';

function App (){
  return (
    <div className="App">

    <Topnav />

      <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/More" component={More} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/login" component={Login} />
        </Switch>
<BottomNav />
      </Router>








    </div>
  );
}


export default App;
