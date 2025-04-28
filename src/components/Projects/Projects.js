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
        Mis trabajos  <strong className="purple">recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
        Aquí tienes algunos proyectos en los que he trabajado recientemente.
        </p>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
          <Link
            to="/project/frontend"
            className={`btn ${location.pathname === "/project/frontend" ? "btn-primary" : "btn-secondary"}`}
            style={{ marginRight: "10px" }}
          >
            Maravillas Front-End
          </Link>
          <Link
            to="/project/csharp"
            className={`btn ${location.pathname === "/project/csharp" ? "btn-primary" : "btn-secondary"}`}
          >
            Desarrollados con C#
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