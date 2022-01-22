import "./App.css";
import Roadmap from "./Components/Roadmap/Roadmap";
import Speakers from "./Components/Speakers/Speakers";
import 'particles.js/particles'


function App() {

  window.particlesJS.load('particles', '/particlesjs-config.json')

  return (
    <div className="relative bg-black">
      <div className="fixed top-0 left-0">
        <div id="particles" className="w-screen h-screen" />
      </div>
      <Roadmap />
      <Speakers />
    </div>
  );
}

export default App;
