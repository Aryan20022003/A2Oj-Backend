import { Fade } from "react-reveal";
import SectionTitle from "../SectionTitle"
import "./sponsors.css";
import { SponsorsData } from "./SponsorsData";

const Sponsors = () => {
  return (
    <section id="sponsors">
      <SectionTitle title="Sponsors" />
      <Fade bottom>
        <div className="sponsors">
          <div className="sponsors_slider">
            {/* <div className="sponsors_slide">
              <img src={SponsorsData[0].img} alt="" />
            </div> */}
            <div className="sponsors_slide">
              <img src={SponsorsData[1].img} alt="" />
            </div>
            {/* <div className="sponsors_slide">
              <img src={SponsorsData[0].img} alt="" />
            </div> */}
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Sponsors;

