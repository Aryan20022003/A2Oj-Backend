import "./speakers.css";
import SectionTitle from "../SectionTitle";
import SpeakersData from "./SpeakersData";

const Speakers = () => {
  return (
    <section>
      <SectionTitle title="Speakers Sessions" />

      <p className="font-secondary text-white mx-auto px-4 my-8 text-xl max-w-screen-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        euismod neque. Mauris arcu arcu, lobortis{" "}
        <span className="text-red-500">
          nec maximus egestas, maximus eget lacus
        </span>{" "}
        Fusce mollis et elit sed finibus. Quisque sed nunc vitae eros fermentum
        volutpat. In in laoreet purus. In tempus commodo lacus at elementum. Sed
        in turpis sed neque cursus posuere at et erat. Ut dignissim lorem eget
        mauris elementum, sed elementum lorem tempor. Aenean rhoncus vel lacus
        sit amet iaculis. Nulla facilisi.
      </p>

      <div className="speaker_card_box">
        {SpeakersData.map((speaker, index) => {
          return (
            <figure
              key={index}
              className="speaker_card"
              data-aos="zoom-in-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="speaker_img">
                <img src={speaker.img} alt="" />
              </div>
              <figcaption>
                <div className="speaker_basic">
                  <h3 className="speaker_name">{speaker.name}</h3>
                  <div className="speaker_date">
                    <div className="speaker_day">{speaker.day}</div>
                    <div className="speaker_month">{speaker.month}</div>
                  </div>
                </div>
                <h4 className="speaker_post">{speaker.post}</h4>
                <div className="speaker_line" />
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Speakers;
