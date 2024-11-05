import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dark from "../../Assets/Projects/CoverFacingMyDarkness.png";
import Virus from "../../Assets/Projects/CoverGlowVirus.png";
import Distress from "../../Assets/Projects/CoverCattleInDistress.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Virus}
              showGitHub={true}
              isBlog={false}
              title="Grow Virus"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<br/>
                    - I developed the UI/UX interface by integrating various types of assets that matched the game's genre and the post-apocalyptic style dynamics.<br/>
                    <br/>
                    - I implemented Animator components and C# code for a realistic animation style where the main player could flow with more lifelike movements in the gameplay.<br/>
                    <br/>`,
                  }}
                />
              }
              ghLink="https://github.com/Sebasm2028/Virus_Project"
              ItchLink="https://sebasm2028.itch.io/growvirus"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dark}
              isBlog={false}
              showGitHub={true}
              title="Facing My Darkness"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<br/>
          - I developed the introduction scene, creating an immersive environment using Unity and C#. I implemented visual and sound effects to enrich the player's experience from the start of the game.<br/>
          <br/>
          - I programmed the main character's movements in the introduction scene, ensuring smooth and responsive gameplay. I used animation and physics techniques in Unity to achieve realistic and engaging behavior.<br/>
          <br/>
          - I implemented Animator components and C# code for a realistic animation style, where the main player could flow with more lifelike movements in the gameplay.<br/>
          <br/>`,
                  }}
                />
              }
              ghLink="https://github.com/SaulCamachoD/My-Darkness"
              ItchLink="https://masterkev.itch.io/my-darkness"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Distress}
              showGitHub={true}
              isBlog={false}
              title="Cattle in Distress"
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<br/>
                    - I designed the platformer map model, which would activate repetitively using C# in a 2d angle.<br/>
                    <br/>
                    - I assigned particle effects and sounds to the Game Over and Run Game events.<br/>
                    <br/>
                    - I developed C# code to manipulate the character's gravity and weight physics during movements in the Run Game.<br/>
                    <br/>`,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/Cattle-In-Distress"
              ItchLink="https://joseph122.itch.io/cattle-in-distress"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
