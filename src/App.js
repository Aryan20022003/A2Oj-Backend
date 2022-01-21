import "./App.css";
import Sponsors from './Components/Sponsors'
import Contact from './Components/Contact'
import 'particles.js/particles'

function App() {
  window.particlesJS.load('particles', '/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
  })

  return (
    <div className="relative bg-black z-10">
      <div className="fixed w-screen h-screen top-0 left-0">
        <div id="particles" />
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
