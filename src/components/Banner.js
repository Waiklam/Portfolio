import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        const toRotate = ['Full-Stack Developer', 'Web Designer', 'Software Developer'];

        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
            setText(updatedText);
    
            if (isDeleting) {
                setDelta(prevDelta => prevDelta / 2);
            }
    
            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(300);
            }
        }

        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
    }, [text, delta, isDeleting, loopNum])

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center ">
                    <Col xs={12} md={6} xl={7} className="spacer text-center">
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>{`Hi I'm Wai `}</h1>
                        <h1><span className="wrap hold"><span className="zen">A </span>{text}</span></h1>
                        <p>I'm a junior developer enthusiastic about making an impact in the tech industry. I've honed my skills through hands-on experience in developing full-stack applications, leveraging technologies such as React for front-end, building RESTful APIs, and managing SQL databases. I've also delved into cloud services, having integrated multiple AWS services my projects.</p>
                        <button><a className="" href="#connect">Let’s Connect<ArrowRightCircle size={25} /></a></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" ></img>
                     </Col>
                </Row>
            </Container>
        </section>
    )
}