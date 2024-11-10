import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaItchIo } from "react-icons/fa";
import CurrentStatus from "./CurrentStatus";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Mail: <b className="purple"> allanacost.27@gmail.com</b></h3> 
        </Col>
        <Col md="4" className="footer-status">
          <CurrentStatus /> {/* Muestra el "Estado Actual" aquí */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AllanAcostaM"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://itch.io/profile/joseph122"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaItchIo />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/joseph-acosta/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
