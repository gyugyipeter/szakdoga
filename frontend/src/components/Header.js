import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import ClickAwayListener from "react-click-away-listener";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./Header.css";

function Header(props) {
  const { setIsKeyEventsDisabled } = useContext(AppContext);
  const [showForm, setShowForm] = useState(false);
  const handleClickAway = () => {
    setShowForm(false);
    setIsKeyEventsDisabled(false);
  };

  return (
    <>
      <div className="header">
        <h1 className="title">MusicBoard</h1>
        <div className="login">
          <ClickAwayListener onClickAway={handleClickAway}>
            <button
              className="login-btn"
              onClick={() => {
                setShowForm(!showForm);
                setIsKeyEventsDisabled(true);
              }}
            >
              Login <BsFillCaretDownFill />
            </button>
            <div>
              <form className={`login-form ${showForm ? "show" : ""}`}>
                <div className="form-wrapper">
                  <label>Username</label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="form-wrapper">
                  <label>Password</label>
                  <input type="password" className="form-control"></input>
                </div>
                <div className="form-buttons">
                  <button type="submit" className="login-button">
                    Login
                  </button>
                  <button type="submit" className="register-button">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </>
  );
}

export default Header;
