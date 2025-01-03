import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import pdf from "../../Assets/../Assets/UsmanAli_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "react-bootstrap/Button";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span >/Experience </span>
            </h1>
            <p className="home-about-body">
              <h2 className="purple">DevDen</h2>
              Software Engineer Intern at DevDen (June 2024-August 2024) (On-Site)
              <br></br><br></br>
              <p>&#8227; Built skills in <span className="purple">Ruby on Rails</span>  for efficient, maintainable application development.<br></br>

                &#8227; Created an <span className="purple">Ecommerce</span>  site with product browsing, add-to-cart, and secure payment features.<br></br>

                &#8227; Designed an admin interface for product management, user monitoring, and order processing.</p>
              <a href="https://github.com/UsmanAli90/Ecommerce-Project" target="_blank"> <button class="btn btn-success">Project</button></a><br></br>

              <hr></hr>


              <h2 className="purple">Google Developer Group-FAST CFD</h2>
              Technical Lead at Google Developer Group (October 2023 - Present)
              <br></br><br></br>
              <p>&#8227; Led the development and technical side for the group, focusing on <span className="purple">AI/ML</span> and <span className="purple">Web Technologies</span>.<br></br>

                &#8227; Organized coding sessions, hackathons, and tech talks, fostering a collaborative environment for learning and innovation.<br></br>

                &#8227; Coordinated team efforts in developing projects that align with Google’s vision, contributing to both personal and community growth.</p>
              <a href="https://www.linkedin.com/company/gdgoc-fast-nuces-cfd/" target="_blank"> <button class="btn btn-success">LinkedIn</button></a><br></br>

              <hr></hr>

              <h2 className="purple">Codsoft</h2>
              Frontend Developer Intern at Codsoft (Oct 2023-Nov 2023) (Remote)
              <br></br><br></br>
              <p>&#8227; Built skills in <span className="purple">ReactJS</span>  for efficient, maintainable development.<br></br>

                &#8227; Created a <span className="purple">Portflio</span>  including different sections.<br></br>

              </p>
              <a href="https://worlddispatch23.netlify.app/" target="_blank"> <button class="btn btn-success">Project</button></a><br></br>
              <hr></hr>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

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
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Usmanali90"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/usmanali90/ "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://twitter.com/@usmanali_90 "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://medium.com/@usmanali23 "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaMediumM />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://stackoverflow.com/users/24298448/usmanali "
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaStackOverflow />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="mailto:muhammad.usmana900@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaEnvelope />
                </a>
              </li>


            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
