import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jossep Acosta</span>
            from <span className="purple"> Bogotá, Colombia.<br/></span>
            <br />
            I’m a Unity game developer with extensive experience in creating 2D and 3D games across various genres, such as survival-horror, platformers, and post-apocalyptic.<br/> 
            <br/>Throughout my career, I have held key roles such as <span className="purple"> Tech Artist / Programmer</span>,<span className="purple"> Game Programmer</span>, and <span className="purple">Level Designer</span>, which has allowed me to develop a comprehensive understanding of game creation and lead teams toward the successful implementation of innovative ideas.
            I love working in different areas of game development such as:
            <br />
            <br />I love working in different areas of game development such as:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Game mechanics
            </li>
            <li className="about-activity">
              <ImPointRight /> AI programming
            </li>
            <li className="about-activity">
              <ImPointRight /> QA/Game Testing
            </li>
            <li className="about-activity">
              <ImPointRight /> Interdisciplinary Collaboration
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
