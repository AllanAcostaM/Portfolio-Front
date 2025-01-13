
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Dark from "../../Assets/Projects/CoverFacingMyDarkness.png";
import Virus from "../../Assets/Projects/CoverGlowVirus.png";
import Distress from "../../Assets/Projects/CoverCattleInDistress.png";
import Alone from "../../Assets/Projects/CoverAloneWithTheDead.png";
import Echoes from "../../Assets/Projects/CoverEchoesOfTheForest.png";


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
                description={
                <span
                    dangerouslySetInnerHTML={{
                    __html: `
                    - I designed and developed player mechanics, implementing physics-based movement using a Character Controller and dynamic sound effects for movements through an AudioManager and RayCast. I created interactions with items like the flashlight, which serves as the primary tool, managed inventory with Open/Close state controls, and developed camera systems with smooth animations using Quaternion Slerp for rotation smoothing. I utilized design patterns such as Singleton and state management to optimize modularity and efficiency in the code.<br><br>
                    - I implemented C# code in UI/UX interfaces for menus and player HUD, including dynamic systems for health, stamina, battery, and BloodScreen. I integrated events such as OnClick, colliders, and real-time updates for bars and visual effects.<br><br>
                    - I took charge of leading everything included in this version. EotF v.0.4<br><br>
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
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
                    - I developed enemy mechanics using a state system with the State and Singleton patterns. I integrated 3D models into Animator, configuring transitions between states such as patrolling, attacking, and alerting, optimizing the dynamic behavior of the enemy.<br/>
                    <br/>
                    - I implemented game interfaces with C# code that guide the player with mission indicators and notifications, updating progress in real-time through events.<br/>
                    <br/>
                    - I corrected textures in the environment and added decals to create a more immersive atmosphere. I also implemented optimization adjustments in light baking and occlusion culling to enhance the performance of the scene.<br><br>
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
              description={
                <span
                  dangerouslySetInnerHTML={{
                    __html: `
                    - I designed and implemented a user interface that enhances the post-apocalyptic horror atmosphere, integrating advanced UI elements through Unity’s UI Toolkit and optimizing graphic assets to minimize performance impact. I utilized Canvas Groups to manage visibility and transitions of UI elements and configured UI animations with Animator Controllers in UI Mask mode to provide a responsive and immersive user experience.<br/>
                    <br/>
                    - I developed the player movement system in C# using custom physics to simulate a more immersive and realistic survival experience. I utilized Unity's Rigidbody component along with custom calculations for force and resistance to replicate fatigue effects, integrating precise obstacle collisions through optimized colliders.<br/>
                    <br/>
                    - I implemented an advanced set of animations using Mecanim and C# programming, with an Animator Controller managing animation layers and Blend Trees for smooth transitions between movement states (such as walking, running, and specific combat actions). <br><br>
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
                    __html: `
                    - I designed and developed the introduction scene by leveraging Unity's Scene Management System and C# scripting to create an immersive environment that establishes the game's tone. I utilized Post-Processing Effects for lighting, shadows, and depth, combined with Audio Mixers to dynamically adjust soundscapes, ensuring a seamless integration of visual and audio elements.<br/>
                    <br/>
                    - I programmed the main character’s movement mechanics in the introduction scene using Unity's Rigidbody and Character Controller components. I applied the State Pattern in C# to manage movement states (idle, walk, run), ensuring responsive and modular control logic.<br/>
                    <br/>
                    - I implemented a detailed animation system with Unity's Animator Controller and C#, utilizing Blend Trees to handle transitions between movement states such as walking, running, and interacting with objects.<br><br>
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
                    __html: `
                    - I designed the platformer map model, implementing a system that dynamically activates and deactivates platforms using C# in a 2D space.<br/>
                    <br/>
                    - I assigned particle effects and sound events to the Game Over and Run Game scenarios, integrating Unity’s Particle System with C# to trigger dynamic visual effects upon specific game events.<br/>
                    <br/>
                    - I developed custom C# code to manipulate the character’s gravity and weight physics during movements in the Run Game scene. I utilized Unity’s Rigidbody2D and Gravity Scale to adjust the character's gravity dynamically, while applying custom forces and mass adjustments in real-time using AddForce and velocity properties for responsive, lifelike movement control. <br><br>
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