import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./screens/Login";
import "./App.css";
import iris from "./images/iris_blue.png";
import Home from "./screens/Home";
import GuardedRoute from "./GuardedRoute";
import { useHistory } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteRight,
  faListAlt,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Qoutes from "./screens/qoutes";
import Category from "./screens/Category";
export default function App() {
  const [isAutheticated, setisAutheticated] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    
    setisAutheticated(false);
    
  };
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
          {isAutheticated && (
            <div className="dashboard-container">
              <div className="dashboard">
                <div className="sidenav">
                  <h3 className="site-title">#arbites-quotes</h3>
                  <ul className="menus">
                    <li>
                      <Link to="/quotes">
                        <FontAwesomeIcon
                          icon={faQuoteRight}
                          className="quoteMenuIcon"
                          color="#065e69;"
                        />
                        <span>quotes</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories">
                        <FontAwesomeIcon
                          icon={faListAlt}
                          className="catmenuIcon"
                        />
                        <span>categories</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/authors">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="authMenuIcon"
                        />
                        <span>authors</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="content">
                  <div className="content-header">
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className="logoutMenuIcon"
                      onClick={handleLogout}
                    />
                  </div>
                  <Route path="/quotes">
                    <Qoutes />
                  </Route>
                  <Route path="/categories">
                    <Category />
                  </Route>
                </div>
              </div>
            </div>
          )}
          <Route path="/login">
            <Login setisAutheticated={setisAutheticated} />
          </Route>
          <GuardedRoute path="/" component={Home} auth={isAutheticated} />
        </Switch>
      </div>
    </Router>
  );
}
