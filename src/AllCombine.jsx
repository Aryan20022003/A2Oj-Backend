import "./App.css";
import "particles.js/particles";
import CodeEditor from "./Components/CodeEditor";
import A2oj_M from "./Components/A2oj_M/A2oj_M";
import LeaderBoard from "./Components/LeaderBoard";
import "particles.js/particles";
import Navbar from "./Components/Navbar//Navbar";
import { Hero } from "./Components/Hero//Hero";
import Roadmap from "./Components/Roadmap/Roadmap";
// import { FAQs } from "./Components/FAQs/Faq";
import "aos/dist/aos.css";
import Aos from "aos";
import { Footer } from "./Components/Footer/Footer";
import About from "./Components/Abouts/About";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";

function AllCombine() {
  window.particlesJS.load("particles", "/particlesjs-config.json");
  Aos.init();
  return (
    <div className="AllComb">
      {/* <ProgressBar /> */}
      <Navbar />
      <Hero />
      <A2oj_M />
      <LeaderBoard />
      <Roadmap />
      <CodeEditor />
      <About />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default AllCombine;
