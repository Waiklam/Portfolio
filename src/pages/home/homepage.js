import React, { useCallback, useState } from "react";
import './homepage.css';




const Home = () => {
    const [aboutState, setAboutState] = useState('About');
    const [openingState, setOpeningState] = useState('Close');

    const aboutChange = useCallback((e) => {
        if (aboutState === 'About') {
            setAboutState('Close');
            setOpeningState('About')
        } else {
            setAboutState('About');
            setOpeningState('Close')
        }
    }, [aboutState])

    return (
        <div className="homepage">
            <div className={`about ${aboutState}`}>
                <p className="about-text">Hello, my name is Wai Lam. I am a self-taught web developer that wants to help companies deliver wonderful and intuitive experiences.</p>
            </div>
            <button className="about-button" onClick={aboutChange}>{aboutState}</button>
            <div className={`opening-group ${openingState}`}>
                <h1>Wai Lam</h1>
                <h2>Web Developer</h2>
            </div>
            <div className="balance">Wai Lam 2023</div>
            <div class="gradient"></div>
        </div>
    )
}

export default Home;