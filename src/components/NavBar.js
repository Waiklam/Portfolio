import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg';
import gitHub from '../assets/img/GitHub.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand>
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/wai-k-lam/"><img src={navIcon1} alt="LinkedIn Icon" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Waiklam"><img className="invert" src={gitHub} alt="GitHub Icon" /></a>
                        </div>
                        <button className="vvd"><a href="#connect"><span>Let’s Connect</span></a></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}