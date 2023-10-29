import React from "react";
import image from '../../public/images/profile.jpg'

function Card() {
    return (
        <div className="card">
            <img src={image} className="profile--pic"/>
            <div className="content">

            <h1 className="title">Murali Krishna</h1>
            <div className="button-container">

                <a href="mailto:muralikanna77@gmail.com" target="_blank"><button className="direct-btn"><i class="fa-solid fa-envelope"></i>Email</button></a>
                <a href="https://www.linkedin.com/in/murali-krishna-sake/" target="_blank"><button className="direct-btn linked" ><i class="fa-brands fa-linkedin"></i>LinkedIn</button></a>
            </div>
            <h2 className="skills">Skills</h2>
            <p className="skills-desc">Empathetic , Web developer , UX Designer , CSS ,HTML </p>
            <h2 className="about">About</h2>
            <p className="about-desc">My expertise lies in HTML, CSS, and web development, enabling me to tackle complex projects while delivering exceptional results. I constantly strive to improve my skills and stay up-to-date with the latest industry trends, ensuring that I can provide innovative solutions that drive user engagement and satisfaction.</p>
            </div>
            <div className="social-container">
                <a href="https://www.linkedin.com/in/murali-krishna-sake/" target="_blank" className="social-link"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Kanna116" target="_blank" className="social-link"><i class="fa-brands fa-github"></i></a>
                <a href="#https://codepen.io/Klax" target="_blank" className="social-link"><i class="fa-brands fa-codepen"></i></a>
                <a href="#" target="_blank" className="social-link"><i class="fa-brands fa-square-x-twitter"></i></a>
            </div>
        </div>
    )
}

export default Card;