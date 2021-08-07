import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Feed from "../pages/Feed";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/feed" component={Feed} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
