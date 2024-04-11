import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from '../assets/img/HTML.png';
import css from '../assets/img/CSS.png';
import javascript from '../assets/img/JavaScript.png';
import react from '../assets/img/React.png';
import python from '../assets/img/Python.png';
import git from '../assets/img/Git.png';
import github from '../assets/img/GitHub.png';
import nodejs from '../assets/img/Nodejs.png';
import sql from '../assets/img/SQL.png';
import awsLambda from '../assets/img/AWS-Lambda.png';
import awsDynamo from '../assets/img/Dynamo.jpg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>

                            </p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={javascript} alt="" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt="" />
                                    <h5>ReactJS</h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt="" />
                                    <h5>Python</h5>
                                </div>
                                <div className='item'>
                                    <img src={nodejs} alt="" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className='item'>
                                    <img src={sql} alt="" />
                                    <h5>SQL</h5>
                                </div>
                                <div className='item'>
                                    <img src={awsLambda} alt="" />
                                    <h5>AWS Lambda</h5>
                                </div>
                                <div className='item'>
                                    <img src={awsDynamo} alt="" />
                                    <h5>AWS DynamoDB</h5>
                                </div>
                                <div className='item'>
                                    <img src={git} alt="" />
                                    <h5>Git</h5>
                                </div>
                                <div className='item'>
                                    <img src={github} alt="" />
                                    <h5>GitHub</h5>
                                </div>
                                <div className='item'>
                                    <img src={html} alt="" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={css} alt="" />
                                    <h5>CSS</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}