import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./pages/about";
import More from "./pages/more";
import Register from "./pages/register";
import Home from "./pages/home";
import Login from "./pages/customer/login";
import Products from "./pages/products";
import Cart from "./pages/cart";
import CustomerSignup from "./pages/customer/customersignup";
import Vendor from "./pages/vendor/vendor";
import Post from "./pages/vendor/post";
import Update from "./pages/vendor/update";
import VendorLogin from "./pages/vendor/vendorLogin";
import VendorSignup from "./pages/vendor/vendorSignup";
import AllPosts from "./pages/vendor/allposts";
import Policy from "./pages/vendor/policy";
import Rerouter from "./pages/rerouter";
import SearchResults from "./pages/searchResults";
function App() {
  return (
    <div>
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rerouter" component={Rerouter} />
          <Route exact path="/searchResults" component={SearchResults} />
          <Route exact path="/More/:location" component={More} />
          <Route exact path="/products/:cartegory" component={Products} />
          <Route exact path="/customerSignup" component={CustomerSignup} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart" component={Cart} />
          <Route path="/vendor">
            <Route exact strict path="/vendor/home" component={Vendor}></Route>
            <Route exact strict path="/vendor/post" component={Post}></Route>
            <Route
              exact
              strict
              path="/vendor/policy"
              component={Policy}
            ></Route>
            <Route
              exact
              strict
              path="/vendor/update/:id"
              component={Update}
            ></Route>
            <Route
              exact
              strict
              path="/vendor/allpost"
              component={AllPosts}
            ></Route>
            <Route
              exact
              strict
              path="/vendor/vendorSignup"
              component={VendorSignup}
            ></Route>
            <Route
              exact
              strict
              path="/vendor/login"
              component={VendorLogin}
            ></Route>
          </Route>

          {/* <Route path="/dashboard">
            <Route exact path="/dashboard/" component={dashboard}></Route>
            <Route exact path="/dashboard/login" component={DashLogin}></Route>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
