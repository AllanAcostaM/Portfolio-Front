import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dark from "../../Assets/Projects/CoverFacingMyDarkness.png";
import Virus from "../../Assets/Projects/CoverGlowVirus.png";
import Distress from "../../Assets/Projects/CoverCattleInDistress.png";
import Alone from "../../Assets/Projects/CoverAloneWithTheDead.png";
import Echoes from "../../Assets/Projects/CoverEchoesOfTheForest.png";
import {
  SiSass,
  SiUnity,
  SiFigma
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";




function ProjectsCSharp() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Echoes}
              showGitHub={true}
              isBlog={false}
              title="Echoes Of The Forest"
              techIcons={[
                SiUnity,
                TbBrandCSharp,
                SiSass,
                SiFigma
              ]}
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                      - Echoes Of The Forest es un survival horror en primera persona donde el jugador debe valerse del sigilo, la resolución de puzles y la gestión de recursos limitados para sobrevivir a un entorno plagado de cultistas y fenómenos paranormales. Sin acceso a armas, exploras localizaciones inquietantes, desentrañas la oscura historia del lugar y evitas la detección a través de la astucia y la observación. <br/>
                      <br/>
                     `,
                  }}
                />
              }
              ghLink="https://github.com/AllanAcostaM/EchoesOfTheForest"
              ItchLink="https://joseph122.itch.io/echoesoftheforest"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Alone}
              showGitHub={true}
              isBlog={false}
              title="Alone With The Dead"
              techIcons={[
                SiUnity,
                TbBrandCSharp,
                SiSass,
                SiFigma
              ]}
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Alone With The Dead te sumerge en un hospital abandonado tras una catástrofe desconocida. Despertando herido y desorientado, recorres pasillos desiertos en busca de pistas, enfrentándote a sucesos perturbadores y ecos lejanos que incrementan la tensión. Su atmósfera inmersiva y su narrativa cargada de suspense ponen a prueba tu ingenio y tu valor. <br/>
                    <br/>
                   `,
                  }}
                />
              }
              ghLink="https://github.com/GermanRM/AloneWithTheDead"
              ItchLink="https://joseph122.itch.io/alonewith-dead"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Virus}
              showGitHub={true}
              isBlog={false}
              title="Grow Virus"
              techIcons={[
                SiUnity,
                TbBrandCSharp,
                SiSass,
                SiFigma
              ]}
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Grow Virus combina acción y horror en un escenario de laboratorio infestado por un letal virus zombi. Como único héroe capaz de detener la pandemia, debes infiltrarte en zonas de alta infección, localizar y destruir los nidos virales antes de que se extienda el contagio. Cada segundo cuenta en esta carrera contrarreloj para salvar a la humanidad. <br/>
                    <br/>
                   `,
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
              techIcons={[
                SiUnity,
                TbBrandCSharp,
                SiSass,
              ]}
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Facing My Darkness es una experiencia narrativa en tercera persona. En ella controlas a Timmy, un niño cuya propia oscuridad interior cobra vida en un mundo reflejo. Combina exploración ambiental, puzles simbólicos y enfrentamientos contra tu yo malvado usando Cinemachine, Animator y efectos de post-procesado para sumergirte en una atmósfera de terror y auto-descubrimiento. <br/>
                    <br/>
                   `,
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
              techIcons={[
                SiUnity,
                TbBrandCSharp,
                SiSass,
              ]}
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: ` <br>
                    - Cattle in Distress es un endless runner ambientado en el Lejano Oeste. Asumes el papel de un vaquero que galopa a toda velocidad, sorteando vallas, cactus y otros peligros del desierto. Gracias a su sistema de generación procedural de obstáculos y controles intuitivos, ofrece una experiencia ágil y desafiante ideal para poner a prueba tus reflejos. <br/>
                    <br/>
                   `,
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

export default ProjectsCSharp;
