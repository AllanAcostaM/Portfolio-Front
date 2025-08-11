import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import movie from "../../Assets/Projects/App-MovieDB.png";
import shopping from "../../Assets/Projects/CoverShopsy.png";
import blog from "../../Assets/Projects/CoverBlogInfinty.png";
import expenses from "../../Assets/Projects/CoverExpenses-tracker.png";
import books from "../../Assets/Projects/CoverUser-books.png";
import billing from "../../Assets/Projects/CoverBillingPro.png";
import {
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiHtml5,
} from "react-icons/si";

function ProjectsCSharp() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={billing}
              showGitHub={true}
              isBlog={false}
              techIcons={[
                SiAngular,
                SiNodedotjs,
                SiPostgresql,
                SiTypescript,
                SiSass,
                SiHtml5,
              ]}
              projectLink="https://billingpro-pymes-jossep.netlify.app"
              title="BillingPro-PYMES"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - BillingPro PYMES centraliza la gestión financiera de pequeñas y medianas empresas en una sola herramienta moderna y eficiente. Optimiza facturación, controla ingresos y genera reportes detallados para impulsar el crecimiento del negocio. <br/>
                    <br/>
                   `,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/BillingPro-PYMES"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              showGitHub={true}
              isBlog={false}
              techIcons={[
                SiReact,
                SiNodedotjs,
                SiMysql,
                SiJavascript,
                SiSass,
                SiHtml5,
              ]}
              projectLink="https://fullstack-infinity-blog-jossep.netlify.app/"
              title="Infinty-Blog"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Infinity Blog es una plataforma de divulgación tecnológica donde comparto mi experiencia en desarrollo full-stack. Con artículos, tutoriales y casos prácticos, inspira e informa tanto a entusiastas como a profesionales del software. <br/>
                    <br/>
                   `,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/InfinityBlog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopping}
              showGitHub={true}
              isBlog={false}
              techIcons={[
                SiReact,
                SiJavascript,
                SiTailwindcss,
                SiHtml5,
              ]}
              projectLink="https://shopsy-app-jossep.netlify.app/"
              title="Shopsy-Commerce"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Shopsy-Commerce es una aplicación de e-commerce especializada en moda femenina, diseñada para ofrecer una experiencia de compra ágil y atractiva. Cuenta con catálogo dinámico, navegación intuitiva y pasarelas de pago seguras. <br/>
                    <br/>
                   `,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/E-Commerce-Shopping-Store"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={books}
              showGitHub={true}
              isBlog={false}
              techIcons={[
                SiAngular,
                SiNodedotjs,
                SiExpress,
                SiTypescript,
                SiSass,
                SiHtml5,
              ]}
              projectLink="https://user-books-teatroteca-jossep.netlify.app/"
              title="Users-Books-Teatroteca"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - User-Books-Teatroteca es una aplicación para la gestión y exploración de catálogos de libros. Permite a los usuarios buscar y filtrar títulos disponibles, consultar detalles como autor, género y disponibilidad, y navegar de forma intuitiva por toda la colección. <br/>
                    <br/>
                   `,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/user-books-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenses}
              showGitHub={true}
              isBlog={false}
              techIcons={[
                SiAngular,
                SiNodedotjs,
                SiExpress,
                SiTypescript,
                SiSass,
                SiHtml5,
              ]}
              projectLink="https://expenses-tracker-app-joseep.netlify.app/"
              title="Expenses-tracker"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Expenses-Tracker es una herramienta de control financiero personal que registra automáticamente las transacciones de ingresos y gastos. Ofrece reportes de tendencias, gráficos de evolución de gastos por categoría y alertas personalizadas para ayudarte a monitorear tu presupuesto a lo largo del tiempo. <br/>
                    <br/>
                   `,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/expenses-tracker-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              showGitHub={true}
              isBlog={false}
              techIcons={[
                SiReact,
                SiJavascript,
                SiSass,
                SiHtml5,
              ]}
              projectLink="https://app-movie-joseep.netlify.app/"
              title="Movies-Data"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Movies-Data es una plataforma de consulta audiovisual donde puedes explorar un catálogo completo de películas y series. Incluye sinopsis detalladas, calificaciones de usuarios, datos de reparto y filtros avanzados por género, año o puntuación, para que encuentres siempre el contenido que más te interese.<br/>
                    <br/>
                   `,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/App-TheMovies"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsCSharp;
