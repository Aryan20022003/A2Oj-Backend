import React from "react";
import "./Nopage.css";
import NP404 from "./NP404.webp";
import image404 from "./image404.png";

function Nopage() {
  return (
    <div
    id="nopage"
        data-aos="zoom-in-down"
        data-aos-delay="100"
        data-aos-duration="500"
        data-aos-easing="ease-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="mnbody" 
    >
    <div >
      <h1 className="head404">404</h1>
            <div className="info">
        <h2 className="headnp">YOU'RE BEYOND THE BORDERS.</h2>
        <p className="desc">
          We know it's scary, but the page you're looking for doesn't exist. Perhaps it was just a bad <s>link</s> dream?  
        </p>
        <a className="drctlink" href="/home">
          Home
        </a>
      </div>
    </div>
    </div>
  );
}

export default Nopage;
