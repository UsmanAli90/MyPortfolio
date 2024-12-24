import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import ecommerce1 from "../../Assets/Projects/EcommerceROR.jpg";
import Capital from '../../Assets/Projects/CapitalValley.png'
import pdf from "../../Assets/../Assets/UsmanAli_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
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
              imgPath={Capital}
              isBlog={false}
              title="Capital Valley"
              description="Capital Valley connects startups with investors, offering a platform for securing funding and protecting ideas through blockchain. Startups can share their projects, and investors can browse and support innovative ventures, ensuring both growth and security."
              language="-> MERN Stack, JavaScript, Node.js, MongoDB, Express, Blockchain"
              ghLink="https://github.com/UsmanAli90/Capital_Valley"
              style={{ width: '100%' }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce(Django)"
              description="Explore our cutting-edge Ecommerce website built with Django! Our open-source project offers a seamless online shopping experience, combining elegant design and robust functionality. Discover a wide range of products while enjoying user-friendly navigation and secure transactions."
              language="-> Python(Django), HTML/CSS"
              ghLink="https://github.com/UsmanAli90/Ecommerce-Django.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce1}
              isBlog={false}
              title="Ecommerce (ROR)"
              description="Discover our innovative eCommerce platform, crafted with Ruby on Rails! This open-source project offers a smooth, enjoyable shopping experience with a refined design and strong functionality. Browse a diverse product range with ease, backed by user-friendly navigation and secure payment processing."
              language="-> ROR(Ruby on Rails), HTML/CSS"
              ghLink="https://github.com/UsmanAli90/Ecommerce-Project"
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
