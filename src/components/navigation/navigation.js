import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';
import ArrowButton from '../../resources/images/arrow-button.png';


const Navigation = () => {
    const [buttonActive, setButtonActive] = useState('inactive');
    const [navActive, setNavActive] = useState('navUp');

 
    const navTransition = useCallback((e) => {
        if (buttonActive === 'active') {
            setButtonActive('inactive');
            setNavActive('navUp');
        } else {
            setButtonActive('active');
            setNavActive('navDown');
        }
    }, [buttonActive]);

    return (
        <nav className={navActive}>
            <ul>
                <li key={'start'} >
                    <NavLink to="/"
                        className={({isActive}) => `nav-link ${isActive? 'nav-link-active' : ''}`}
                    >
                        Home
                    </NavLink>
                </li>
                <li key={'projects'} >
                    <NavLink to="/projects"
                        className={({isActive}) => `nav-link ${isActive? 'nav-link-active' : ''}`}
                    >
                        Projects
                    </NavLink>
                </li>
                <li key={'contact'} >
                    <NavLink to="/contact"
                        className={({isActive}) => `nav-link ${isActive? 'nav-link-active' : ''}`}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
            <img className={`navButton ${buttonActive}`} onClick={navTransition} src={ArrowButton} alt="Nav Arrow" />
        </nav>
    )
}

export default Navigation;