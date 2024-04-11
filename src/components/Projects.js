import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import ProjectPlaylist from "../assets/img/ProjectSpotify.png";
import RPS from "../assets/img/RockPaperScissors.png";
import TFS from "../assets/img/TwitchFanSite.png";
import MTG from "../assets/img/MTGDeck.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png"



export const Projects = () => {
    const projects = [
        {
            title: 'MTG Deck Builder',
            demo: 'https://waiklam.github.io/ProjectPlaylist/',
            code: 'https://github.com/Waiklam/ProjectPlaylist',
            description: 'A Full-Stack web app: React front-end, Node.js, Python RESTful API on AWS Lambda, and Amazon DynamoDB',
            img: MTG
        },
        {
            title: 'ProjectPlaylist',
            demo: 'https://waiklam.github.io/ProjectPlaylist/',
            code: 'https://github.com/Waiklam/ProjectPlaylist',
            description: 'Spotify approved playlist app: Uses PKCE OAuth 2.0 for secure asynchronous calls to the Spotify API.',
            img: ProjectPlaylist
        },
        { 
            title: 'Rock Paper Scissors',
            demo: 'https://waiklam.github.io/RockPaperScissors/',
            code: 'https://github.com/Waiklam/RockPaperScissors',
            description: 'Play Rock Paper Scissors against the bot!',
            img: RPS
        },
        {
            title: 'TwitchSite',
            demo: 'https://waiklam.github.io/TwitchSite/',
            code: 'https://github.com/Waiklam/TwitchSite',
            description: 'Website showcasing popular video games and streamers on the popular streaming platform Twitch.tv',
            img: TFS
        }
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <div className="proj-header">
                                    <span>These are some of my personal projects</span>
                                    <span>Each one links to a working application along with its code repository</span>
                                </div>
                                <span></span>
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                        })
                                    }
                                </Row>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" alt="" src={colorSharp2} />
        </section>
    )
}