import React from "react";
import './skills.css';
import Html from '../../resources/images/skills/HTML.png';
import Css from '../../resources/images/skills/CSS.png';
import JavaScript from '../../resources/images/skills/JavaScript.png';
import ReactImg from '../../resources/images/skills/React.png';
import Git from '../../resources/images/skills/Git.png';
import GitHub from '../../resources/images/skills/GitHub.png';
import Linux from '../../resources/images/skills/Linux.png';
import NodeJs from '../../resources/images/skills/Nodejs.png';
import Papyrus from '../../resources/images/skills/Papyrus.png';
import Photoshop from '../../resources/images/skills/Photoshop.png';
import Lightroom from '../../resources/images/skills/Lightroom.png';
import Premier from '../../resources/images/skills/Premier.png';

const Skills = () => {
    const skillList = [
        {
            name: 'HTML',
            img: Html,
        },
        {
            name: 'CSS',
            img: Css,
        },
        {
            name: 'JavaScript',
            img: JavaScript,
        },
        {
            name: 'React',
            img: ReactImg,
        },
        {
            name: 'Git',
            img: Git,
        },
        {
            name: 'GitHub',
            img: GitHub,
        },
        {
            name: 'Linux',
            img: Linux,
        },
        {
            name: 'Node.js',
            img: NodeJs,
        },
        {
            name: 'Papyrus',
            img: Papyrus,
        },
        {
            name: 'Photoshop',
            img: Photoshop,
        },
        {
            name: 'Lightroom',
            img: Lightroom,
        },
        {
            name: 'Premier',
            img: Premier,
        }
        
    ]

    return (
        <div className="skillsPage">
            <div className="skillsHeader">
                <h1 className="skillsTitle">Skills</h1>
            </div>
            <section className="skillsSection">
                {skillList.map(skill => (
                    <div className="indivSkill">
                        <img className="skillImg" src={skill.img} alt={skill.name} />
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </section>
            <div class="gradient"></div>
        </div>
    )
}

export default Skills;