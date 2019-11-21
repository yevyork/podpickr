import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Nav.css";
import podicon from "../img/coffee.svg";
import homeicon from "../img/home2.svg";
import plusicon from "../img/plus.png"

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
            <img className="icon" src={homeicon} alt="podicon" />
          </NavLink>
        </div>
        <div className="podnav">
          <NavLink className="nav" exact to="/pods" activeClassName="active">
            PODS
            <img className="icon" src={podicon} alt="podicon" />
          </NavLink>
        </div>
        <div className="addpodnav">
          <NavLink className="nav" exact to="/addpod" activeClassName="active">
            ADD POD
            <img className="icon" src={plusicon} alt="podicon" />
          </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
