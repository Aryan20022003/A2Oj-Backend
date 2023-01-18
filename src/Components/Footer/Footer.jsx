import logo from './logo.png'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import discord from './discord.svg'
import youtube from './youtube.svg'

import './footer.css'

export const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div class="full">
                <div class="firstContainer">
                    <div class="logo">
                        <img src={logo} alt="logo" width="150" />
                    </div>
                    <div class="events">
                        <p>
                            <a href="https://dccnita.tech">Home</a>
                        </p>
                        <p>
                            <a href="https://dccnita.tech/events">Events</a>
                        </p>
                        <p>
                            <a href="https://dccnita.tech/teams">Teams</a>
                        </p>
                    </div>
                </div>
                <div class="secondContainer">
                    <div class="location">
                        <h3>DEVELOPERS AND CODERS CLUB NITA</h3>
                        <p>
                            National Institute of Technology, Agartala,
                            <br />
                            Jirania, Tripura - 799046
                        </p>
                    </div>
                    <div class="social">
                        <h3>SOCIAL</h3>
                        <div class="imgContainer">
                            <a href="https://www.instagram.com/dccnita/" target="_blank">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://twitter.com/dccnita" target="_blank">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/dccnita/" target="_blank">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://discord.gg/58qJhGtTaa" target="_blank">
                                <img src={discord} alt="" />
                            </a>
                            <a href="https://www.youtube.com/@DCCNITA" target="_blank">
                                <img src={youtube} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='events-hidden'>
                        <span>
                            <a href="https://dccnita.tech">Home</a>
                        </span>
                        <span>
                            <a href="https://dccnita.tech/events">Events</a>
                        </span>
                        <span>
                            <a href="https://dccnita.tech/teams">Teams</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
};