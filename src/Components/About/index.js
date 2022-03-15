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
            *Event Name*, a student run hackathon organized by Developers & Code Club of NIT Agartala brings and adventurous journey of ** days, from April 15th to April 17th, 2022 through its speaker sessions + 72 hours long hackathon where the beginners as well as experienced developers collaborate in a team of ** members to go beyond the possible to solve real life statements and develop solutions and their prototypes. Take this as an opportunity to apply the software and hardware technologies you've learned and push your limits with creativity and proficiency.
          </div>
          <img className='pb-4' src="/Images/about/hackathons-logo.png" alt="" />
        </div>
      </div>
    </Fade>
  )
}
