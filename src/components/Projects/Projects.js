import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import weather from "../../Assets/Projects/weather.jpg";
import ecommerce1 from "../../Assets/Projects/EcommerceROR.jpg";

import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import pdf from "../../Assets/../Assets/UsmanAli_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "react-bootstrap/Button";

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
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="Explore our cutting-edge Ecommerce website built with Django! Our open-source project offers a seamless online shopping experience, combining elegant design and robust functionality. Discover a wide range of products while enjoying user-friendly navigation and secure transactions."
              language= "-> Python(Django), HTML/CSS"
              ghLink="https://github.com/UsmanAli90/Ecommerce-Django.git"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce1}
              isBlog={false}
              title="Ecommerce (ROR)"
              description="Discover our innovative eCommerce platform, crafted with Ruby on Rails! This open-source project offers a smooth, enjoyable shopping experience with a refined design and strong functionality. Browse a diverse product range with ease, backed by user-friendly navigation and secure payment processing."
              language= "-> ROR(Ruby on Rails), HTML/CSS"
              ghLink="https://github.com/UsmanAli90/Ecommerce-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-App"
              description="Our weather website provides real-time weather information for any location worldwide. Users can enter their desired location, and our website instantly fetches the current weather data, including temperature, weather conditions, and humidity."
              language= "-> JavaScript, HTML/CSS"
              ghLink="https://github.com/UsmanAli90/Weather-App.git"
              demoLink="https://weatherappbyusman.netlify.app/"
            />
          </Col>
          <br></br><br></br><br></br>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <br></br><br></br>
          
        </Row>
      </Container>
    </Container>
    
  );
  
}

export default Projects;
