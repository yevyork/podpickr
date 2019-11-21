import React from "react";
import Widget from "../Widget";
import "../../styles/Home.css";
import heroimg from "../../img/hero.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="textcontainer">
        <p className="toptext">
          Some of us like to taste the different flavor notes when we drink
          coffee, some of us just drink it for the boost. You can have both with Nespresso.
        </p>
        <p className="toptext">The one thing Nespresso doesn't give us is the caffeine content per pod. That's why Podpickr exists.</p>
        <br></br>
        <p className="midtext">Let's find out which flavor is right for you.</p>
      </div>
      <div className="center-container">
        <div className="widget">
          <Widget />
        </div>
        <div className="heroimg">
          <a href='http://www.nespresso.com/' target='_blank' rel='noopener noreferrer'><img className="heroimg" src={heroimg} alt="heroimg" /></a>
          {/* <img className="heroimg" src={heroimg} alt="heroimg" /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
