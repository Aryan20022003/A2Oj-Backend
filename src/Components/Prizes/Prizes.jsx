import React from "react";
import "./Prizes.css";
import rank1 from "./../../assets/Prizes/rank1.png";
import rank2 from "./../../assets/Prizes/rank2.png";
import rank3 from "./../../assets/Prizes/rank3.png";
import p1 from "./../../assets/Prizes/pic.webp";
import SectionTitle from "../SectionTitle";
import { Fade } from "react-reveal";

export default function Prizes() {
  return (
    <section id="prize">
      <SectionTitle title={"Prizes"} />
      <Fade bottom>
        <div className="prizes-wrapper">
          <div className="prize-scene-outer">
            <div className="prize-card prize-first prize-small">
              <div className="prize-card__face prize-card__face--front">
                <img src={rank1} alt="" />
              </div>
              <div className="prize-card__face prize-card__face--back">
                <img className="prize-winner-image" src={p1} alt="" />
                <h2 className="prize-winner-name">Akshat Kumar Verma</h2>
              </div>
            </div>

            <div className="prize-scene">
              <div className="prize-card">
                <div className="prize-card__face prize-card__face--front">
                  <img src={rank2} alt="" />
                </div>
                <div className="prize-card__face prize-card__face--back">
                  <img className="prize-winner-image" src={p1} alt="" />
                  <h2 className="prize-winner-name">Akshat Kumar Verma</h2>
                </div>
              </div>
              <div className="prize-card prize-first prize-large">
                <div className="prize-card__face prize-card__face--front">
                  <img src={rank1} alt="" />
                </div>
                <div className="prize-card__face prize-card__face--back">
                  <img className="prize-winner-image" src={p1} alt="" />
                  <h2 className="prize-winner-name">Akshat Kumar Verma</h2>
                </div>
              </div>
              <div className="prize-card">
                <div className="prize-card__face prize-card__face--front">
                  <img src={rank3} alt="" />
                </div>
                <div className="prize-card__face prize-card__face--back">
                  <img className="prize-winner-image" src={p1} alt="" />
                  <h2 className="prize-winner-name">Akshat Kumar Verma</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
