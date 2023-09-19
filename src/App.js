import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Home from "./components/Home";
import Pizza from "./components/Pizza";

import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const [adet, setAdet] = useState(1);

  const adetArttir = () => {
    setAdet(adet + 1);
  };
  const adetAzalt = () => {
    setAdet(adet - 1);
  };

  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/pizza">
        <Pizza adet={adet} adetArttir={adetArttir} adetAzalt={adetAzalt} />
      </Route>
    </Switch>
  );
};
export default App;
