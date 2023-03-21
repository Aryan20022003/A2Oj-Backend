import React from "react";
import "./Hero.css";
import Coding from "./coding.svg";

export const Hero = () => {
  return (
    <section className="hero_wrapper">
      <div className="hero_left">
        <h1
          className="hero_main_title"
          data-aos="zoom-in-down"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          NITA-CP
        </h1>
        <p className="hero_slogan">Dream Code Conquer</p>
        <div className="hero_info">
          <span>Contest Alert !</span>
        </div>
      </div>
      <div
        className="hero_right"
        data-aos="fade"
        data-aos-delay="000"
        data-aos-duration="500"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <img className="hero_img" src={Coding} alt="" />
      </div>
    </section>
  );
};
