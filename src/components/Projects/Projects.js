import React from "react";
import { Container, Row} from "react-bootstrap";
import { Outlet, Link, useLocation, Navigate } from "react-router-dom";


function Projects() {

  const location = useLocation();

  // Si estás en "/project", redirige a "/project/frontend" automáticamente
  if (location.pathname === "/project") {
    return <Navigate to="/project/frontend" />;
  }

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
          <Link
            to="/project/frontend"
            className={`btn ${location.pathname === "/project/frontend" ? "btn-primary" : "btn-secondary"}`}
            style={{ marginRight: "10px" }}
          >
            Front-End Wonders
          </Link>
          <Link
            to="/project/csharp"
            className={`btn ${location.pathname === "/project/csharp" ? "btn-primary" : "btn-secondary"}`}
          >
            Built with C#
          </Link>
        </div>
        {/* Outlet para renderizar los subcomponentes */}
        <Row>
          <Outlet />
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;