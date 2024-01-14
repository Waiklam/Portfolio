import React, { useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import './navigation.css';
import ArrowButton from '../../resources/images/arrow-button.png';


const Navigation = () => {
    const [buttonActive, setButtonActive] = useState('inactive');
    const [navActive, setNavActive] = useState('navUp');
    const links = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Skills',
            path: '/'
        },
        {
            id: 3,
            name: 'Project',
            path: '/projects'
        },
        {
            id: 4,
            name: 'Contact',
            path: '/contact'
        }
    ]
 
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

                {links.map(link => (
                    <li key={link.id}>
                        <NavLink to={link.path}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <img className={`navButton ${buttonActive}`} onClick={navTransition} src={ArrowButton} alt="Nav Arrow" />
        </nav>
    )
}

export default Navigation;