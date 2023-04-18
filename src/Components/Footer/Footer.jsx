import logo from './logo.png'
import instagram from './instagram.svg'
import linkedin from './linkedin.svg'
import twitter from './twitter.svg'
import discord from './discord.svg'
import youtube from './youtube.svg'

import './footer.css'
import { NavLink } from 'react-router-dom'

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
                            <NavLink to="/home">Home</NavLink>
                        </p>
                        <p>
                            <NavLink to="/a2oj">A2OJ</NavLink>
                        </p>
                        <p>
                            <NavLink to="/leaderboard">Leaderboard</NavLink>
                        </p>
                        <p>
                            <NavLink to="/roadmap">Roadmap</NavLink>
                        </p>
                        <p>
                            <NavLink to="/code-editor">Code Editor</NavLink>
                        </p>
                        <p>
                            <NavLink to="/about">About</NavLink>
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
                            <a href="https://www.instagram.com/dccnita/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="https://twitter.com/dccnita" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="https://www.linkedin.com/company/dccnita/" target="_blank" rel="noopener noreferrer" >
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="https://discord.gg/58qJhGtTaa" target="_blank" rel="noopener noreferrer">
                                <img src={discord} alt="" />
                            </a>
                            <a href="https://www.youtube.com/@DCCNITA" target="_blank" rel="noopener noreferrer">
                                <img src={youtube} alt="" />
                            </a>
                        </div>
                    </div>
                    <div className='events-hidden'>
                        <div className="flex flex-row justify-between px-4">
                            <span>
                                <NavLink to="/home">Home</NavLink>
                            </span>
                            <span>
                                <NavLink to="/a2oj">A2OJ</NavLink>
                            </span>
                            <span >
                                <NavLink to="/about">About</NavLink>
                            </span>
                        </div >
                        <div className="flex flex-row justify-center gap-5">

                            <span>
                                <NavLink to="/roadmap">Roadmap</NavLink>
                            </span>
                            <span>
                                <NavLink to="/code-editor">Code Editor</NavLink>
                            </span>
                            <span>
                                <NavLink to="/leaderboard">Leader board</NavLink>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};