import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import About from './allroutes/about';
import More from './allroutes/more';
import Register from './allroutes/register';
import Home from './allroutes/home';
import Topnav from './topnav';
import store from './store/';

function App (){
  return (
    <div className="App">
    <Provider store={ store }>
    <Topnav />

    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/More" component={More} />
        <Route exact path="/Register" component={Register} />
      </Router>
      </Provider>
    </div>
  );
}


export default App;
