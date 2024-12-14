import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MyAva from "../../Assets/MyAvatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm Allan, an enthusiastic software developer passionate about crafting innovative  <br />
            solutions. 💻  
              <br />
              <br />I handle technologies like
              <i>
                <b className="purple"> React</b> {" "},{" "} <b className="purple">Angular</b> {" "},{" "} <b className="purple">Node.js</b> {" "} and {" "} <b className="purple"> postgreSQL</b>
              </i>
              <br />
              <br />
              My areas of interest include&nbsp; 
              <i>
                <b className="purple">building intuitive </b>{" "} and {" "} <b className="purple">scalable web applications</b>{""},
                enhancing user interfaces and{" "}
                <b className="purple">
                ensuring efficient server-side performance. 
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into developing 
              software projects by implementing modern frameworks,{" "}
              <b className="purple">leveraging design patterns</b>{""},{""} <b className="purple"> following clean architecture principles</b>{""}, and{""} <b className="purple">collaborating using agile methodologies</b>. I also maintain high-quality code through
               version control systems like
              <i>
                <b className="purple"> Git </b>{" "}and{" "}<b className="purple">GitHub</b>{""}.{""} 
              </i>
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
            <img src={MyAva} className="img-fluid rounded-avatar" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AllanAcostaM"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joseph-acosta/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
