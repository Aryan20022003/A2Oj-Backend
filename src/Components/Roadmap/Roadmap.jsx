import SectionTitle from "../SectionTitle";
import "./roadmap.css";
import '../../App.css';
import Data from "./RoadmapData";

const Roadmap = () => {
  return (
    <section id="schedule">
      <SectionTitle title="Roadmap" />
      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white text-center mx-auto my-6 px-4 text-xl max-w-screen-xl">
        Let’s get ready for the fun-filled 48-hr Hackathon.
        <span className="text-red-500">
        </span>
      </p>
      <div style={{ fontFamily: "'Montserrat', sans-serif" }} className="roadmap_timeline max-w-screen-lg mx-auto mt-12">
        <div className="w-full mx-auto p-4">
          <div className="roadmap_items mx-auto">
            {
              Data.map((item, index) => {
              return (
                <div key={index} style={{ color: "#000" }} className="roadmap_item">
                  <div className="roadmap_item_date text-red-500">
                    {item.date}
                  </div>
                  <div className="roadmap_item_dot" />
                  <div className="roadmap_item_content drop-shadow-sm p-5 rounded">
                    <h3 className="roadmap_header">{item.header}</h3>
                    {item.text}
                  </div>
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
