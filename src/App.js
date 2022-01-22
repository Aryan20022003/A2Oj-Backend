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

      <div className="App bg-black min-h-screen">
        <Roadmap />
        <Speakers />
      </div>
    </div>
  );
}

export default App;
