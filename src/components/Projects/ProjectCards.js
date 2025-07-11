import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaItchIo } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CiLink } from "react-icons/ci";
// ahora opcional: un par de iconos de ejemplo,
// pero en realidad los importas según lo que uses

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.techIcons && props.techIcons.length > 0 && (
          <div className="tech-icons">
             {props.techIcons.map((IconComp, idx) => (
               <IconComp
                 key={idx}
                 size={30}
                 title={IconComp.displayName || "tech-icon"}
               />
             ))}
           </div>   
        )}

        {props.showGitHub && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        {!props.isBlog && props.ItchLink && (
          <Button
            variant="primary"
            href={props.ItchLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <FaItchIo /> &nbsp;
            {"Play"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* New button for CiLink */}
        {props.projectLink && props.projectLink !== "" && (
          <Button
            variant="primary"
            href={props.projectLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CiLink /> &nbsp;
            {"Go Project"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
