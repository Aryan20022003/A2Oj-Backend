import { Fade } from "react-reveal";
import SectionTitle from "../SectionTitle"
import "./sponsors.css";
import { SponsorsData } from "./SponsorsData";

const Sponsors = () => {
  return (
    <>
      <SectionTitle title="Sponsors" />
      <Fade bottom>
        <section id="sponsors" className="sponsors">
          <div className="sponsors_slider">
            <div className="sponsors_slide">
              <img src={SponsorsData[0].img} alt="" />
            </div>
            <div className="sponsors_slide">
              <img src={SponsorsData[0].img} alt="" />
            </div>
            <div className="sponsors_slide">
              <img src={SponsorsData[0].img} alt="" />
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
}

export default Sponsors;

