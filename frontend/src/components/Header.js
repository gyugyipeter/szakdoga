import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import { ApiContext } from "./ApiContext";
import ClickAwayListener from "react-click-away-listener";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./Header.css";

function Header(props) {
  const { setIsKeyEventsDisabled } = useContext(AppContext);
  const { isLoggedIn, login, logout, register } = useContext(ApiContext);
  const [showForm, setShowForm] = useState(false);
  const handleClickAway = () => {
    if (showForm) {
      setShowForm(false);
      setIsKeyEventsDisabled(false);
    }
  };

  const displayForm = () => {
    setShowForm(true);
    setIsKeyEventsDisabled(true);
  };

  const [user, setUser] = useState({ username: "", password: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const [isLogging, setIsLogging] = useState(true);

  return (
    <>
      <div className="header">
        <h1 className="title">MusicBoard</h1>
        <div className="login">
          <ClickAwayListener onClickAway={handleClickAway}>
            {isLoggedIn ? (
              <button
                className="login-btn logout-btn"
                onClick={() => {
                  logout();
                }}
              >
                Log out
              </button>
            ) : (
              <button className="login-btn" onClick={displayForm}>
                Login <BsFillCaretDownFill />
              </button>
            )}
            <div className={`login-form ${showForm ? "show" : ""}`}>
              <div className="navbar">
                <button
                  className={`navButton ${isLogging && "selected"}`}
                  onClick={() => setIsLogging(true)}
                >
                  Login
                </button>
                <button
                  className={`navButton ${!isLogging && "selected"}`}
                  onClick={() => setIsLogging(false)}
                >
                  Register
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // prevent user data getting displayed in link
                  setShowForm(!showForm);
                  isLogging
                    ? login(user.username, user.password)
                    : register(user.username, user.password);
                  e.target.reset(); // to clear the inputs after submit
                }}
              >
                <div className="form-wrapper">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    required
                    minLength="5"
                    maxLength="16"
                    onChange={handleInputChange}
                  ></input>
                </div>
                <div className="form-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    minLength="5"
                    maxLength="16"
                    onChange={handleInputChange}
                  ></input>
                </div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </div>
          </ClickAwayListener>
        </div>
      </div>
    </>
  );
}

export default Header;
