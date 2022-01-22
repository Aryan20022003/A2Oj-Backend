import "./App.css";
import 'particles.js/particles'
import Contact from './Components/Contact'
import Sponsors from './Components/Sponsors'
import About from "./Components/About"
import SupportedBy from "./Components/SupportedBy"
import Container from './Components/common/Container'
import 'particles.js/particles'
import SectionTitle from "./Components/SectionTitle";
import Roadmap from "./Components/Roadmap/Roadmap";
import Speakers from "./Components/Speakers/Speakers";


function App() {
  window.particlesJS.load('particles', '/particlesjs-config.json')

  return (
    <div className="relative bg-black">
      <div className="fixed top-0 left-0">
        <div id="particles" className="w-screen h-screen" />
      </div>

      <div className="App bg-black min-h-screen">
        <SectionTitle title="About The Hackathon" />
        <About />
      </div>
      <div className="App bg-black min-h-screen">
        <SectionTitle title="Supported By" />
        <SupportedBy />
      </div>
      <div className="App bg-black min-h-screen">
        <Roadmap />
        <Speakers />
      </div>

      <section id="sponsors">
        <Container>
          <Sponsors />
        </Container>
      </section>

      <section id="contact">
        <Container>
          <Contact />
        </Container>
      </section>
    </div>

  );
}

export default App;
