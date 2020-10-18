import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { CgPiano } from "react-icons/cg";
import { FaGuitar, FaDrum } from "react-icons/fa";

import Guitarbody from "./GuitarBody";
import Pianobody from "./PianoBody";
import Drumbody from "./DrumBody";
import "./Sidebar.css";

function Body(props) {
  return (
    <Router>
      <div className="page">
        <nav className="sidebar">
          <span className="sidebarHeader">Instruments</span>
          <ul>
            <li>
              <Link to="/guitar">
                <FaGuitar className="sidebarIcon" /> Guitar
              </Link>
            </li>
            <li>
              <Link to="/piano">
                <CgPiano className="sidebarIcon" /> Piano
              </Link>
            </li>
            <li>
              <Link to="/drum">
                <FaDrum className="sidebarIcon" /> Drum
              </Link>
            </li>
          </ul>
        </nav>
        <div className="instrument">
          <Switch>
            <Route path="/guitar" exact component={Guitarbody} />
            <Route path="/piano" exact component={Pianobody} />
            <Route path="/drum" exact component={Drumbody} />
          </Switch>
        </div>
      </div>
      <Redirect exact from="/" to="guitar" />
    </Router>
  );
}

export default Body;
