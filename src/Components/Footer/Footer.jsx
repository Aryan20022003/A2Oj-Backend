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
                            <a href="#a2oj">A2OJ</a>
                        </p>
                        <p>
                            <a href="#leaderboard">Leaderboard</a>
                        </p>
                        <p>
                            <a href="#roadmap">Roadmap</a>
                        </p>
                        <p>
                            <a href="#code-editor">Code Editor</a>
                        </p>
                        <p>
                            <a href="#about">About</a>
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
                        <div className="flex flex-row">
                            <span>
                                <a href="#A2OJ">A2OJ</a>
                            </span>
                            <span >
                                <a href="#about">About</a>
                            </span>
                            <span>
                                <a href="#roadmap">Roadmap</a>
                            </span>
                        </div >
                        <div className="flex flex-row justify-center gap-5">

                            <span>
                                <a href="#code-editor">Code Editor</a>
                            </span>
                            <span>
                                <a href="#leaderboard">Leader board</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};