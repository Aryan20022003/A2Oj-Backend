import "./App.css";
import "particles.js/particles";
import CodeEditor from "./Components/CodeEditor";
import A2oj_M from "./Components/A2oj_M/A2oj_M";
import LeaderBoard from "./Components/LeaderBoard";
import "particles.js/particles";
import Navbar from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero//Hero";
import Roadmap from "./Components/Roadmap/Roadmap";
// import { FAQs } from "./Components/FAQs/Faq";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactForm from "./Components/Contact";
import ProgressBar from "./Components/ProgressBar";
import Prizes from "./Components/Prizes/Prizes";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
import { Footer } from "./Components/Footer/Footer";
import About from "./Components/Abouts/About";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";
import Leaderboard from "./Components/LeaderBoard";
import AllCombine from "./AllCombine";
import LaddersPage from "./Components/A2oj_M/ladders/[laddersId]";

function App() {
  window.particlesJS.load("particles", "/particlesjs-config.json");
  Aos.init();
  return (
    <div className="App">
      <div className="relative">
        <div className="fixed top-0 left-0 -z-50">
          <div
            id="particles"
            style={{ background: "#08081b" }}
            className="w-screen h-screen"
          />
        </div>

        {/* <ProgressBar /> */}
        {/* <Navbar /> */}
        {/* <Hero />
        <A2oj_M />
        <LeaderBoard />
        <Roadmap />
        <CodeEditor />
        <About/>
        <Footer />
        <ScrollToTopButton/> */}

        <BrowserRouter>
            <Navbar/>   
          <Routes >
            <Route index element={<Hero />}></Route>
            <Route path="/a2oj" element={<A2oj_M />}></Route>
            <Route path="/leaderboard" element={<LeaderBoard />}></Route>
            <Route path="/roadmap" element={<Roadmap />}></Route>
            <Route path="/code-editor" element={<CodeEditor />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/ladders" element={<LaddersPage />}></Route>
            <Route path="*" element={<About />} />  
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
