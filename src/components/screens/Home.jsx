import React from "react";
import Widget from "../Widget";
import "../../styles/Home.css";
import heroimg from "../../img/hero.jpg";

const Home = props => {
  return (
    <div className="home">
      <div className="textcontainer">
        <p className="toptext">
          Some of us like to taste the different flavor notes when we drink
          coffee.
        </p>
        <p className="toptext">Some of us just drink it for the boost.</p>
        <br></br>
        <p className="midtext">Let's find out which flavor is right for you.</p>
      </div>
      <div className="center-container">
        <div className="widget">
          <Widget />
        </div>
        <div className="heroimg">
          <img className="heroimg" src={heroimg} alt="heroimg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
