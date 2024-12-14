import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Jossep Acosta </span>
            from <span className="purple"> Bogotá</span>,<span className="purple"> Colombia.<br/></span>
            <br />
            I’m a software developer with 1.5 years of experience specializing in front-end and full-stack development. I have worked on a variety of web applications, focusing on creating dynamic, user-friendly interfaces and robust back-end solutions.  
            <br/> 
            <br/>Throughout my career, I have held key roles such as <span className="purple">  Front-End Developer</span>,<span className="purple"> Full-Stack Developer</span>, and <span className="purple">UI/UX Designer</span>, allowing me to build a comprehensive understanding of software development and successfully contribute to the implementation of innovative solutions.  
            <br />
            <br />I love working in different areas of software development such as: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building responsive and accessible user interfaces  

            </li>
            <li className="about-activity">
              <ImPointRight /> Optimizing performance in client-server architectures
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing and implementing clean, scalable code
            </li>
            <li className="about-activity">
              <ImPointRight /> Collaborating across interdisciplinary teams
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <br/>"Find excellence among the details <br />
            that have made you stumble"{" "}
          </p>
          <footer className="blockquote-footer">Jossep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
