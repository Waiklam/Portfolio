import React from "react";
import './contact.css';
import PhoneIcon from '../../resources/images/phone-icon.png';
import LinkedInIcon from '../../resources/images/linkedin-icon.png';
import EmailIcon from '../../resources/images/email-icon.png';

const Contact = () => {

    return (
        <div className="contact-main">
            <div className="contact-me">
                <div className="contact-box">
                    <section className="contact-header">
                        <div>Contact Me</div>
                    </section>
                    <section className="contact-section">
                        <div className="contact-inner">
                            <div className="contact left">
                                <p className="contactText">I want to help companies create beautiful and meaningful spaces for their customers</p>
                                <p className="contactText">We can do so much together. Lets talk.</p>
                                <div className="iconPanel">
                                    <a href="mailto: waiklam97@gmail.com" target="_blank" className="contact-icon"><img src={EmailIcon} alt="email" className="contact-icon" /></a>
                                    <a href="https://www.linkedin.com/in/wai-lam-6b71b6184/" target="_blank" className="contact-icon"><img src={LinkedInIcon} alt="linked-in" className="contact-icon" /></a>
                                    <a href="Tel: 123-456-7890" target="_blank" className="contact-icon"><img src={PhoneIcon} alt="phone" className="contact-icon" /></a>
                                </div>
                            </div>
                            <div className="contact right">
                                <div className="contact-right-header">
                                    Send a Message!
                                </div>
                                <div className="contact-form">
                                    <form className="form" action="" id="contactForm">
                                        <div className="contact-row">
                                            <div className="half">
                                                <input type="text" className="input" name="first-name" id="first-name" placeholder="First Name" required />
                                            </div>
                                            <div className="half">
                                                <input type="text" className="input" name="last-name" id="first-name" placeholder="Last Name" required />
                                            </div>
                                        </div>
                                        <div className="contact-row">
                                            <div className="half">
                                                <input type="text" className="input" name="form-email" id="form-email" placeholder="Email" required />
                                            </div>
                                            <div className="half">
                                                <input type="text" className="input" name="form-phone-number" id="form-phone-number" placeholder="Phone" required />
                                            </div>
                                        </div>
                                        <textarea className="contactMessage" name="message" id="contactForm" placeholder="Hey, I think we need a frontend developer at our company. When can we discuss this?"></textarea>
                                        <div className="contact-row">
                                            <div className="full">
                                                <input type="submit" id="contact-submit" /> 
                                            </div>
                                        </div>
                                    </form>    
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
            <div class="gradient"></div>
        </div> 
    )
}

export default Contact;