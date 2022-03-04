import '../../App.css';
import SectionTitle from '../SectionTitle';

export default function About() {
  return (
    <div id='about' 
    data-aos="zoom-in"
    data-aos-delay="00"
    data-aos-duration="500"
    data-aos-easing="ease-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" style={{ background: "rgba(13, 13, 46, 0.4)", padding: "1.5rem 0 2rem 0", borderRadius: "0.5rem", margin: "0 1rem 2rem 1rem" }}>
      <SectionTitle title="About the Hackathon" />
      <div className="flex flex-col-reverse px-6 py-4 items-center md:justify-evenly md:flex-row">
        <div className="flex text-lg leading-7 items-start text-center font-secondary text-white w-full md:w-8/12 md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat necessitatibus, aspernatur autem in, consequuntur deserunt, praesentium molestiae cumque explicabo dolorem ad doloremque eius officia. Neque animi, esse nostrum perferendis asperiores sint illo voluptatum at, minus nesciunt quidem aliquam, sequi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, repellendus!  praesentium molestiae cumque explicabo dolorem ad doloremque eius officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, maxime?
        </div>
        <img className='pb-4' src="/Images/about/hackathons-logo.png" alt="" />
      </div>
    </div>
  )
}
