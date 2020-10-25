import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { CgPiano } from "react-icons/cg";
import { FaGuitar } from "react-icons/fa";
import { GiGuitar } from "react-icons/gi";

import Guitarbody from "./Guitar/GuitarBody";
import Pianobody from "./Piano/PianoBody";
import Bassbody from "./Bass/BassBody";
import "./Sidebar.css";

function Body(props) {
  return (
    <Router>
      <div className="page">
        <nav className="sidebar">
          <span className="sidebarHeader">Instruments</span>
          <ul>
            <li>
              <Link to="/piano">
                <CgPiano className="sidebarIcon" /> <span>Piano</span>
              </Link>
            </li>
            <li>
              <Link to="/guitar">
                <FaGuitar className="sidebarIcon" /> <span>Guitar</span>
              </Link>
            </li>
            <li>
              <Link to="/bass">
                <GiGuitar className="sidebarIcon" /> <span>Bass</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="instrument">
          <Switch>
            <Route path={["/","/guitar"]} exact component={Guitarbody} />
            <Route path="/piano" exact component={Pianobody} />
            <Route path="/bass" exact component={Bassbody} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Body;
