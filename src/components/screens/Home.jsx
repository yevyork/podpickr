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
          coffee, some of us just drink it for the boost. <br></br>You can have both with Nespresso.
        </p>
        <p className="toptext">The one thing Nespresso doesn't give us is the caffeine content per pod. That's why Podpickr exists.</p>
        <br></br>
        <p className="midtext">Which pod is right for you?</p>
      </div>
      <div className="center-container">
        <div className="widget">
          <Widget />
        </div>
        <div className="heroimg">
          <a className='getlink' href='http://www.nespresso.com/' target='_blank' rel='noopener noreferrer'>Get Nespresso!<img className="heroimg" src={heroimg} alt="heroimg" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
