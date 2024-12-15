import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <FontAwesomeIcon icon={faHome} />
          <span><Link to="/layout">Home</Link></span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
          <span><Link to="/error">Profile</Link></span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCog} />
          <span><Link to="/setting">Settings</Link></span>
        </li>
        <li>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span><Link to='/'>Logout</Link></span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
