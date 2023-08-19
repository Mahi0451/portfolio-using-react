import React from "react";
import picture1 from "../images/boy profile picture.jpg"

const AboutMe = () => {

     return(
        <div className="aboutme">
            <h1>About Me</h1>
            <img src={picture1} alt="profile-logo" />
            <p>Hello everyone! I am thrilled to introduce myself as someone with a passion for Frontend
               and a track record of success in the industry: With five years of experience working at 
               prestigious companies, as well as contributing to exciting startups like Think42 and Openhouse, 
               I have honed my skills and gained invaluable knowledge. Beyond my professional endeavors,
               I have also dedicated a significant portion of my career building frontend software. 
               Over the past three years, I have had the privilege of of making useful projects.  
               Currently, I am embarking on a new adventure by creating my own startup. 
               This venture allows me to combine my technical expertise, entrepreneurial spirit, and desire to make a 
               meaningful impact on the world of software, I am excited to tackle the challenges and opportunities
               that lie ahead, and I am eager to connect with like-minded individuals who share my passion for
               innovation and my skills to build Projects.</p>
        </div>
     )
}


export default AboutMe;


