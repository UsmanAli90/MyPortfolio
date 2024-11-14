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
              <a href="https://github.com/UsmanAli90/Ecommerce-Project" target="_blank"> <button class="btn btn-success">Project</button></a>
             
              <hr></hr>
              Hello! I'm <i><b className="purple">Usman Ali</b></i>, a passionate <i><b className="purple">Software Developer</b></i> from Pakistan.
              <br />
              <br />I specialize in building dynamic and scalable applications using <i><b className="purple">MERN Stack</b></i>, <i><b className="purple">Ruby on Rails (RoR)</b></i>, <i><b className="purple">Django</b></i>, and <i><b className="purple">Python</b></i>.
              <br />
              <br />
              My key areas of interest include <i><b className="purple">Web Development</b></i> and leveraging <i><b className="purple">AI and Large Language Models (LLMs)</b></i> to create innovative solutions.
              <br />
              <br />
              I'm always eager to collaborate on challenging projects that drive meaningful impact, and I’m continuously expanding my expertise in cutting-edge technologies.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
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
