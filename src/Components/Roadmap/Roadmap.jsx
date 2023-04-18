import SectionTitle from "../SectionTitle";
import { useEffect } from "react";
import "./roadmap.css";
import "../../App.css";
import Data from "./RoadmapData";
import { Fade } from "react-reveal";
import Coding from "../Hero/coding.svg"; //temporary image source will be replace in final build.
import { useParams } from "react-router-dom";
import { FiLink } from 'react-icons/fi';
import pro8 from "./pro8.png";

//must be replaced in final build.


const Roadmap = () => {

  const comp = useParams();
  // console.log(comp);


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  });
  return (
    <section id="roadmap"
    data-aos="zoom-in-down"
    data-aos-delay="100"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    >
      <SectionTitle title="Roadmap" />
      <p style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-white text-center mx-auto my-6 px-4 text-xl max-w-screen-xl">
        Learning path to get started in your CP journey.
        <span className="text-red-500">
        </span>
      </p>
      <div
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="roadmap_timeline max-w-screen-lg mx-auto mt-12"
      >
        <div className="w-full mx-auto p-4">
          <div className="roadmap_items mx-auto">
            {
              Data.map((item, index) => {
                return (
                  <div key={index} style={{ color: "#000" }} className="roadmap_item">
                    <Fade delay={500} left><div className="roadmap_item_date text-red-500">{item.date}</div></Fade>
                    <Fade delay={1000} top><div className="roadmap_item_dot" /></Fade>
                    <Fade duration={1500} right>
                      <div className="roadmap_item_content drop-shadow-sm p-5">


                        <img src={item.img} alt="" style={{ maxHeighth: "13.5rem", width: "27rem" }} />
                        <h3 className="roadmap_header">{item.header} {item.icon ? <FiLink className="inline" /> : null}</h3>
                        <ul>
                          {item.text.map((textData, textIndex) => (<li key={textIndex}>
                            <a href={textData.link} target="_blank" rel="noopener noreferrer">
                              {textData.icon} {textData.content}</a>

                          </li>))}
                        </ul>
                        {/* console.log(item.text); */}
                      </div>
                    </Fade>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

/*
1. C++ Basic CWH 1 - 20 -> I/O , Conditional Statements, Loops, Pointers, Array, String, Function
2. STL -> Vectors, Pair, Iterators, Map, Set, Stack , Queue, Priority-Queue, Dequeue, LowerBound-UpperBound, Sorting, Comparator Function 
-> Time Complexity, Space
3. Greedy 
4. Binary Search
3. Number Thoery
6. Two Pointer
4. Recursion
5. Bit Manipulation
7. DP
8. Graph
9. Tree
10. Mis- Range Queries, Sqrt Decomposition, Probability, Game THoery   



*/
