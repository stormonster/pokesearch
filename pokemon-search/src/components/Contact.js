import React from 'react';
import '../App.css';
import profilePicture from '../stormonster.png';

const Contact = () => {
    return(
        <div>
            <h1>Contact information</h1>
            <img className="profile-picture" src={profilePicture} alt="Tim 'stormonster' Kjell" />
            <br />
            <h3>Tim "stormonster" Kjell</h3>
            <p>After 9 years in the gaming industry as a designer, producer and manager I felt like changing career paths completely and trying something new.</p>
            <p>The best way to get in touch is through Twitter or E-Mail.</p>
            <div className="contact-container">
                <a href="mailto:tim@tkjell.se">
                    <div id="email">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                </a>
                <a href="http://twitter.com/stormonster">
                <div id="twitter">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
                </a>
                <a href="http://www.youtube.com/stormonster">
                <div id="youtube">
                    <i className="fa fa-youtube" aria-hidden="true"></i>
                </div>
                </a>
                <a href="http://www.twitch.com/stormonster">
                <div id="twitch">
                    <i className="fa fa-twitch" aria-hidden="true"></i>
                </div>
                </a>
                <a href="http://www.linkedin.com/in/timkjell">
                <div id="linkedin">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </div>
                </a>
            </div>
        </div>
    )
}

export default Contact;
