import { Container, Row, Col } from "react-bootstrap";
import linkedIn from '../assets/img/nav-icon1.svg';
import gitHub from '../assets/img/GitHub.png';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wai-k-lam/"><img src={linkedIn} alt="LinkedIn Icon" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wai-k-lam/"><img className="invert" src={gitHub} alt="GitHub Icon" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}