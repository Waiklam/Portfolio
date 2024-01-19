import React from "react";
import './projects.css';
import ProjectPlaylist from '../../resources/images/ProjectSpotify.png';
import RockPaperScissors from '../../resources/images/RockPaperScissors.png';
import TwitchSite from '../../resources/images/TwitchFanSite.png';


const Projects = () => {
    const projectList = [
        {
            name: 'ProjectPlaylist',
            demo: 'https://waiklam.github.io/ProjectPlaylist/',
            code: 'https://github.com/Waiklam/ProjectPlaylist',
            img: ProjectPlaylist
        },
        { 
            name: 'RockPaperScissors',
            demo: 'https://waiklam.github.io/RockPaperScissors/',
            code: 'https://github.com/Waiklam/RockPaperScissors',
            img: RockPaperScissors
        },
        {
            name: 'TwitchSite',
            demo: 'https://waiklam.github.io/TwitchSite/',
            code: 'https://github.com/Waiklam/TwitchSite',
            img: TwitchSite
        }
    ]

    return (
        <div className="projectPage">
            <section className="projectHeader">
                <h1 className="projectTitle">Portfolio Projects</h1>
            </section>
            <div className="projectBody">
                {projectList.map(item => (
                    <section className="projectRow">
                        <h1>{item.name}</h1>
                        <img className="projectImage" src={item.img} alt="Working App" />
                        <div className="buttonGroup">
                            <a href={item.demo} target="_blank">
                                <button className="projectButton demo">Demo</button>
                            </a>
                            <a href={item.code} target="_blank">
                                <button className="projectButton code">Code</button>
                            </a>
                        </div>
                    </section>
                ))}
            </div>
            <div class="gradient"></div>
        </div>
    )
}

export default Projects;