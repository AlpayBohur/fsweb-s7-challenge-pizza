import React from "react";
import HomeImage from "../Assets/adv-aseets/adv-form-banner.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-home">
      <h1>Teknolojik Yemekler</h1>
      <div className="container-body">
        <div className="container-text">
          <h1>KOD ACIKTIRIR</h1>
        </div>
        <div className="container-text">
          <h1>PIZZA,DOYURUR</h1>
        </div>
        <div className="home-btn">
          <Link to={"/pizza"}>
            <button id="order-pizza">ACIKTIM</button>
          </Link>
        </div>
      </div>
      <div className="container-img">
        <img src={HomeImage} />
      </div>
    </div>
  );
};

export default Home;
