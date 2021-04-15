import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight ,faListAlt, faUser} from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="sidenav">
          <h3 className="site-title">#arbites-quotes</h3>
          <ul className="menus">
            <li>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="quoteMenuIcon"
                color="#065e69;"
              />
              <span>quotes</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faListAlt} className="catmenuIcon" />
              <span>categories</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} className="authMenuIcon" />
              <span>authors</span>
            </li>
          </ul>
          {/* <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a> */}
        </div>

        <div className="content"></div>
      </div>
    </div>
  );
};

export default Home;
