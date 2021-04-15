import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./screens/Login";
import "./App.css";
import iris from "./images/iris_blue.png";
import Home from "./screens/Home";
import GuardedRoute from "./GuardedRoute";

export default function App() {
  const [isAutheticated, setisAutheticated] = useState(false);
  return (
    <Router>
      <div className="container-full main">
        <img
          className="login-bg login-bg--right"
          src={iris}
          alt="iris-bg"
        ></img>
        <img className="login-bg login-bg--left" src={iris} alt="iris-bg"></img>
        <Switch>
          <Route path="/login">
            <Login setisAutheticated={setisAutheticated} />
          </Route>
          <GuardedRoute path="/" component={Home} auth={isAutheticated} />
        </Switch>
      </div>
    </Router>
  );
}
