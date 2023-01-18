import SectionTitle from "../SectionTitle";
import '../../App.css';
import { Fade } from "react-reveal";

export default function SupportedBy() {
  return (
    <section id="problems">
      <SectionTitle title="Problem Statements" />
      <div className="mt-12">
        <Fade duration={500} bottom>
          <div className="flex flex-col justify-between gap-4 items-center px-4 pb-20 md:flex-row">
            <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
            </div>
            <div style={{ fontWeight: "400" }} className="font-secondary text-lg leading-7 text-center md:text-left md:w-9/12">
              <h4 style={{ fontWeight: "500", color: "#22A7F0" }} className="font-secondary text-2xl mb-4 md:text-xl">
                Problem Statement 1
              </h4>
              Develop a web / android application that can track codeforces profiles of users for regular participation into contests. The application should check for participation after each codeforces contest and store the results for further analysis into a database. Technical requirements include familiarity with specific programming languages or frameworks. The application should have a user interface and user experience that is intuitive and user-friendly.
            </div>
          </div>
        </Fade>
        <Fade duration={500} bottom>
          <div className="flex flex-col gap-4 justify-between items-center px-4 pb-20 md:flex-row-reverse">
            <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
            </div>
            <div style={{ fontWeight: "400" }} className="font-secondary text-lg leading-7 text-center md:text-left md:w-9/12">
              <h4 style={{ fontWeight: "500", color: "#22A7F0" }} className="font-secondary text-2xl mb-4 md:text-xl">
                Problem Statement 2
              </h4>
              The lack of a centralized platform for cab sharing, reporting lost & found objects, and buying/selling/exchanging items among students at NIT Agartala is causing difficulties for students to efficiently plan their transportation, recover lost items, and engage in commerce with their peers.
              Develop a web / android application that allows registered students of NIT Agartala to publicly share information about their travel for cab sharing to save some money, to report lost & found objects and enable them to sell / exchange / buy goods among each other. The application should provide other users the functionality to view posts and contact the required person.
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
