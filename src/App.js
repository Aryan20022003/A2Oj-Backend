import "./App.css";
import Contact from './Components/Contact'
import Sponsors from './Components/Sponsors'
import Container from './Components/common/Container'
import 'particles.js/particles'

function App() {
  window.particlesJS.load('particles', '/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded')
  })

  return (
    <div className="relative bg-black">
      <div className="fixed top-0 left-0">
        <div id="particles" className="w-screen h-screen" />
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
