import '../../App.css';
import SectionTitle from '../SectionTitle';

export default function About() {
  return (
    <>
      <SectionTitle title="About The Hackathon" />
      <div className="flex flex-col-reverse md:justify-around items-center mt-8 md:flex-row">
        <div className="text-center font-secondary text-white w-full md:w-10/12 md:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat necessitatibus, aspernatur autem in, consequuntur deserunt, praesentium molestiae cumque explicabo dolorem ad doloremque eius officia. Neque animi, esse nostrum perferendis asperiores sint illo voluptatum at, minus nesciunt quidem aliquam, sequi eligendi a fugiat officiis labore! Molestiae reprehenderit odit tempora nostrum a. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quod. Autem rerum nesciunt expedita numquam doloribus sed distinctio quas. Doloribus nihil assumenda dicta distinctio voluptatibus ipsum modi sed sint at!
        </div>
        <div className="about_image">
          <img className="mb-2" src="/Images/about/hackathons-logo.png" alt="" />
        </div>
      </div>
    </>
  )
}