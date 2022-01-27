import SectionTitle from "../SectionTitle";
import "./roadmap.css";
import Data from "./RoadmapData";

const Roadmap = () => {
  return (
    <section className="bg-black min-h-screen mt-12">
      <SectionTitle title="Roadmaps" />
      <p className="text-white text-center mx-auto my-6 px-4 text-xl max-w-screen-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        euismod neque. Mauris arcu arcu, lobortis{" "}
        <span className="text-red-500">
          nec maximus egestas, maximus eget lacus
        </span>
      </p>
      <div className="roadmap_timeline max-w-screen-lg mx-auto mt-12">
        <div className="w-full mx-auto p-4">
          <div className="roadmap_items mx-auto">
            {Data.map((item, index) => {
              return (
                <div key={index} className="roadmap_item">
                  <div className="roadmap_item_date font-semibold text-white">
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
