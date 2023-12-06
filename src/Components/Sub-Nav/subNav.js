import "./subNav.css";
import Dropdown from "react-bootstrap/Dropdown";

import React from "react";

const subNav = () => {
  return (
    <div className="containerr">
      <div className="list">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className="buttons-container">
        <div className="dropdown-buttons">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              My Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">SignIn</Dropdown.Item>
              <Dropdown.Item href="#/action-2">SignUp</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="dropdown-buttons">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              USD
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
              <Dropdown.Item href="#/action-2">EUR</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="dropdown-buttons">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              EN
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Arabic</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default subNav;
