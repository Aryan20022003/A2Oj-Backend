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
      Prizes worth over 15k are up for grabs!
    </section>
  );
}
