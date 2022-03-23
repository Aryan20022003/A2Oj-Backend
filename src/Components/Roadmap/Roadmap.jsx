import SectionTitle from "../SectionTitle";
import "./roadmap.css";
import "../../App.css";
import Data from "./RoadmapData";
import { Fade } from "react-reveal";

const Roadmap = () => {
  return (
<<<<<<< HEAD
    <section>
      <SectionTitle title="Roadmaps" />
      <p
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="text-white text-center mx-auto my-6 px-4 text-xl max-w-screen-xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        euismod neque. Mauris arcu arcu, lobortis
=======
    <section id="schedule">
      <SectionTitle title="Roadmap" />
      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white text-center mx-auto my-6 px-4 text-xl max-w-screen-xl">
        Let’s get ready for the fun-filled 48-hr Hackathon.
>>>>>>> 7589debac4f3f8b40f95be9eaa99faf499c9cb74
        <span className="text-red-500">
        </span>
      </p>
      <div
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="roadmap_timeline max-w-screen-lg mx-auto mt-12"
      >
        <div className="w-full mx-auto p-4">
          <div className="roadmap_items mx-auto">
<<<<<<< HEAD
            {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ color: "#000" }}
                  className="roadmap_item"
                  data-aos={(index%2!==0)?"fade-left":"fade-right"}
                  data-aos-delay="00"
                  data-aos-duration="500"
                  data-aos-easing="ease-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <div className="roadmap_item_date text-white">
                    {item.date}
=======
            { 
              Data.map((item, index) => {
                return (
                  <div key={index} style={{ color: "#000" }} className="roadmap_item">
                    <Fade delay={500} left><div className="roadmap_item_date text-red-500">{item.date}</div></Fade>
                    <Fade delay={1000} top><div className="roadmap_item_dot" /></Fade>
                    <Fade duration={1500} right>
                      <div className="roadmap_item_content drop-shadow-sm p-5">
                        <h3 className="roadmap_header">{item.header}</h3>
                        {item.text}
                      </div>
                    </Fade>
>>>>>>> 7589debac4f3f8b40f95be9eaa99faf499c9cb74
                  </div>
                );
              })
            }
          </div>
        </div>
        zz
      </div>
    </section>
  );
};

export default Roadmap;
