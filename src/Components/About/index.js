import '../../App.css';
import SectionTitle from '../SectionTitle';
import Fade from 'react-reveal/Fade';

export default function About() {
  return (
    <Fade duration={800} bottom>
      <div id='about' style={{ background: "rgba(13, 13, 46, 0.4)", padding: "1.5rem 0 2rem 0", borderRadius: "0.5rem", margin: "0 1rem 2rem 1rem" }}>
        <SectionTitle title="About the Hackathon" />
        <div className="flex flex-col-reverse px-6 py-4 items-center md:justify-evenly md:flex-row">
          <div className="flex text-lg leading-7 items-start text-center font-secondary text-white w-full md:w-8/12 md:text-left">
            The Intra State Hackathon, 'Hack-NITA' is an exciting opportunity for students to showcase their skills, creativity and problem-solving abilities. This hackathon aims to provide a platform for students to come together and collaborate on innovative projects that can make a real-world impact. Whether you're a seasoned coder or just starting out, this event welcomes all students from different majors, backgrounds and skill levels to participate. Join us as we push the boundaries of technology, and compete for prizes and recognition in the industry. The final round of Hack-NITA is a time-bound event, where participants have to think on their feet and come up with a working prototype. Get ready to hack, code, and create!
          </div>
          <img className='pb-4' src="/Images/about/hackathons-logo.png" alt="" />
        </div>
      </div>
    </Fade>
  )
}
