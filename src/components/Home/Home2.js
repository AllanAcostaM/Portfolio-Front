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
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy Allan, un entusiasta desarrollador de software apasionado por
              crear soluciones innovadoras. 💻
              <br />
              <br />
              Manejo tecnologías como
              <i>
                <b className="purple"> React</b> ,{" "}
                <b className="purple">Angular</b> ,{" "}
                <b className="purple">Node.js</b> y{" "}
                <b className="purple">SQL</b>.
              </i>
              <br />
              <br />
              Mis áreas de interés incluyen&nbsp;
              <i>
                <b className="purple">construir aplicaciones web intuitivas</b>{" "}
                y <b className="purple">escalables</b>, mejorar las interfaces
                de usuario y{" "}
                <b className="purple">
                  garantizar un rendimiento eficiente del lado del servidor
                </b>
              </i>
              .
              <br />
              <br />
              Siempre que sea posible, canalizo mi pasión en el desarrollo de
              proyectos de software implementando frameworks modernos,{" "}
              <b className="purple">aprovechando patrones de diseño</b>,{" "}
              <b className="purple">
                siguiendo principios de arquitectura limpia
              </b>{" "}
              y <b className="purple">colaborando con metodologías ágiles</b>.
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img
                src={MyAva}
                className="img-fluid rounded-avatar"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
            Siéntete libre de <span className="purple">conectarte </span>conmigo
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
