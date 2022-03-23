import './speakers.css'
import SectionTitle from '../SectionTitle';
import SpeakersData from './SpeakersData';
import { Fade } from 'react-reveal';

const Speakers = () => {
    return (
        <section id='mentors'>
            <SectionTitle title="Speakers Sessions" />
            <p className='font-secondary text-white mx-auto px-4 my-8 text-xl max-w-screen-xl'>
                We are honoured to have an esteemed panel of Speakers, who will also be a part of our Hackathon Judging committee. Each Speaker has been selected due to their integrity, experience, and in-depth knowledge of this industry, and we're proud to have the individuals below as our judging panel for this year. Here's an introduction to each of the judges, while you can find out more about our Speaker / Judges below:
            </p>

            <div className="speaker_card_box">
                {
                    SpeakersData.map((speaker, index) => {
                        return (
                            <Fade big>
                                <figure key={index} className='speaker_card'>
                                    <div className="speaker_img">
                                        <img src={speaker.img} alt="" />
                                    </div>
                                    <figcaption>
                                        <div className="speaker_basic">
                                            <h3 className='speaker_name'>{speaker.name}</h3>
                                            <div className='speaker_date'>
                                                <div className="speaker_day">{speaker.day}</div>
                                                <div className="speaker_month">{speaker.month}</div>
                                            </div>
                                        </div>
                                        <h4 className='speaker_post'>{speaker.post}</h4>
                                        <div className='speaker_line' />
                                    </figcaption>
                                </figure>
                            </Fade>
                        )
                    })
                }

            </div>

        </section>
    );
}

export default Speakers;
