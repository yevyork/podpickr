import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import podicon from "../img/podicon.png";

const Nav = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <NavLink className="nav" exact to="/" activeClassName="active">
          HOME
        </NavLink>
        <img className="pod-icon" src={podicon} alt="podicon"></img>
        <NavLink className="nav" exact to="/pods" activeClassName="active">
          PODS
        </NavLink>
        <img className="pod-icon" src={podicon} alt="podicon"></img>
        <NavLink className="nav" exact to="/addpod" activeClassName="active">
          ADD POD
        </NavLink>
        <img className="pod-icon" src={podicon} alt="podicon"></img>
      </div>
      <div className="titles-container">
        <h2 className="apptitle">Podpickr</h2>
        <p className="heading">
          A Complete Guide to OriginalLine Nespresso Pods From Someone Who Just
          Drinks For The Caffeine
        </p>
      </div>
    </div>
  );
};

export default Nav;
