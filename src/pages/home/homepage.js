import React, { useCallback } from "react";
import './homepage.css';




const Home = () => {
    

    const aboutChange = () = useCallback((e) => {
        
    })

    return (
        <div className="homepage">
            <div className="about">
                <div className="about-wrapper">
                    <p className="about-text">Hello, my name is Wai Lam. I am a self-taught web developer that wants to help companies deliver wonderful and intuitive experiences.</p>
                </div>
            </div>
            <button className="about-button">About</button>
            <div className="opening-group">
                <h1>Wai Lam</h1>
                <h2>Web Developer</h2>
            </div>
            <div className="balance">Wai Lam 2023</div>
            <div class="gradient"></div>
        </div>
    )
}

export default Home;