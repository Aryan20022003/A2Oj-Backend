import React, { useEffect } from "react";
import "./Hero.css";
import Coding from "./coding.svg";

export const Hero = () => {
  return (
    <section className="hero_wrapper">
      {/* <div className="absolute">
        <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
          <div class="relative w-full h-full max-w-2xl md:h-auto">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ipsa? Repellendus fugit natus optio earum aut molestias cum animi explicabo, ipsa dolor exercitationem nihil maxime iusto, et praesentium officia dolore. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis optio dicta, sapiente, fuga et rem expedita, eligendi aspernatur ut assumenda nobis nam similique obcaecati. Minima dignissimos aut officia est quas?</p>
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati ducimus officiis voluptatibus ad inventore cumque illum iste nulla. Error quis optio deserunt ipsum, praesentium facilis eligendi ipsa nemo blanditiis!</h1>
            </div>
          </div>
        </div>
      </div> */}
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
        <div className="hero_info rounded">
          <span className="rounded">Contest Alert !</span>
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
