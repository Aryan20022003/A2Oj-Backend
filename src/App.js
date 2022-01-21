import "./App.css";
import Sponsors from './Components/Sponsors'
import Contact from './Components/Contact'
import 'particles.js/particles'

function App() {
  window.particlesJS.load('particles', '/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  })

  return (
    <div className="px-2 sm:px-0 relative bg-black">
      <div className="fixed top-0 left-0">
        <div id="particles" className="w-screen h-screen" />
      </div>

      <section className="max-w-7xl mx-auto py-12" id="sponsors">
        <Sponsors />
      </section>

      <section className="max-w-7xl mx-auto py-12" id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
