import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, soy <span className="purple">Jossep Acosta </span>  
            de <span className="purple"> Bogotá</span>, <span className="purple">Colombia.<br/></span>
            <br />
            Soy un desarrollador de software con mas de 2 años de experiencia,  
            especializado en desarrollo Front-End y Full-Stack. He trabajado en  
            diversas aplicaciones web, enfocándome en crear interfaces dinámicas  
            y fáciles de usar, así como soluciones back-end robustas.  
            <br/> 
            <br/>
            A lo largo de mi carrera, he desempeñado roles clave como  
            <span className="purple"> Desarrollador Front-End</span>,  
            <span className="purple"> Desarrollador Full-Stack</span> y  
            <span className="purple"> Diseñador UI/UX</span>, lo que me ha permitido  
            adquirir una comprensión integral del desarrollo de software y  
            contribuir con éxito a la implementación de soluciones innovadoras.  
            <br />
            <br />
            Me encanta trabajar en diferentes áreas del desarrollo de software, tales como:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Construir interfaces de usuario responsivas y accesibles
            </li>
            <li className="about-activity">
              <ImPointRight /> Optimizar el rendimiento en arquitecturas cliente-servidor
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseñar e implementar código limpio y escalable
            </li>
            <li className="about-activity">
              <ImPointRight /> Colaborar en equipos interdisciplinarios
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <br/>"Encuentra la excelencia entre los detalles <br />
            que te han hecho tropezar"
          </p>
          <footer className="blockquote-footer">Jossep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;