
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movie from "../../Assets/Projects/App-MovieDB.png";



function ProjectsCSharp() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              showGitHub={true}
              isBlog={false}
              projectLink= "https://merry-naiad-903fd0.netlify.app/"
              title="App MovieDB"

              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - I implemented a layered architecture to ensure a clear data flow and an effective separation of responsibilities. The presentation layer exclusively handles component rendering and user interaction, while the business logic layer handles data manipulation and state management. Finally, the data access layer handles HTTP requests to TheMovieDB API centralizing fetch operations and reducing code duplication. <br/>
                    <br/>
                    - I developed a specialized module to consume TheMovieDB API using fetch and handling requests asynchronously with async/await. I implemented a data service that abstracts the request logic, applying robust error handling with try...catch. Additionally, I optimized the data flow by normalizing the API responses and applying destructuring to extract only the relevant information, such as the title, synopsis, and image for each series. <br/>
                    <br/>
                    - I implemented useState to manage the local state of the components in a declarative way, ensuring reactive control over the data consumed from the API. Additionally, I used useEffect to trigger requests to the API at the component mounting phase (componentDidMount). <br><br>
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