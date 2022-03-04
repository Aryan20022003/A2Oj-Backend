import SectionTitle from "../SectionTitle";
import "./roadmap.css";
import "../../App.css";
import Data from "./RoadmapData";

const Roadmap = () => {
  return (
    <section>
      <SectionTitle title="Roadmaps" />
      <p
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="text-white text-center mx-auto my-6 px-4 text-xl max-w-screen-xl"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        euismod neque. Mauris arcu arcu, lobortis
        <span className="text-red-500">
          nec maximus egestas, maximus eget lacus
        </span>
      </p>
      <div
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="roadmap_timeline max-w-screen-lg mx-auto mt-12"
      >
        <div className="w-full mx-auto p-4">
          <div className="roadmap_items mx-auto">
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
                  </div>
                  <div className="roadmap_item_dot" />
                  <div className="roadmap_item_content drop-shadow-sm bg-white p-5 rounded">
                    {item.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        zz
      </div>
    </section>
  );
};

export default Roadmap;
