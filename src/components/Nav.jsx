import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import podicon from "../img/coffee.svg";

const Nav = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <div className="titles-container">
          <h2 className="apptitle">Podpickr</h2>
          <p className="heading">
            A Caffeine Guide for OriginalLine Nespresso Pods
          </p>
        </div>
        <div className='navlinks'>
        <div className="homenav">
          <NavLink className="nav" exact to="/" activeClassName="active">
            HOME
            <img className="pod-icon" src={podicon} alt="podicon"></img>
          </NavLink>
        </div>
        <div className="podnav">
          <NavLink className="nav" exact to="/pods" activeClassName="active">
            PODS
            <img className="pod-icon" src={podicon} alt="podicon"></img>
          </NavLink>
        </div>
        <div className="addpodnav">
          <NavLink className="nav" exact to="/addpod" activeClassName="active">
            ADD POD
            <img className="pod-icon" src={podicon} alt="podicon"></img>
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
