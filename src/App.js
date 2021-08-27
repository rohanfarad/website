import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Image } from "semantic-ui-react";
import NavBar from "./Comp/NavBar";
import Home from "./Comp/Home";
import Aboutus from "./Comp/Aboutus";
import AllCategories from "./Comp/AllCategories";
import Applications from "./Comp/Applications";
import Industries from "./Comp/Industries";
import Services from "./Comp/Services";
import ContactUs from "./Comp/ContactUs";
import Login from "./Comp/Login";
import Footer from "./Comp/Footer";

function App() {
  return (
    <div className="background">
      <Router>
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/aboutus">
              <Aboutus />
            </Route>
            <Route path="/Products">
              <AllCategories />
            </Route>
            <Route path="/Applications">
              <Applications />
            </Route>
            <Route path="/Industries">
              <Industries />
            </Route>
            <Route path="/Services">
              <Services />
            </Route>
            <Route path="/ContactUs">
              <ContactUs />
            </Route>
            <Route path="/Login">
              <Login />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
