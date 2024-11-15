import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import myImg from "../../Assets/avatar.svg";
import myImg from "../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";

import { FaEnvelope } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            Hey there Iam <i> <b className="purple"> Usman Ali </b></i>, a <i> <b className="purple"> Software Developer  </b></i> and <i> <b className="purple"> MERN Stack Dveloper </b></i> from Pakistan
                            <br />
                            <br />Proficient in <i> <b className="purple"> C++ </b>, <b className="purple"> Python </b>, <b className="purple"> ReactJs </b></i>, and <i> <b className="purple"> Django </b></i> with experience in <i> <b className="purple"> MERN </b></i> stack development.
                            <br />

                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    AI and LLMs.
                                </b>
                            </i>
                            <br />
                            <br />
                            Whenever possible, I also apply my passion for developing products
                            with <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    Modern Javascript Library and Frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js and Next.js</b>
                            </i>
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
                                    href="https://github.com/UsmanAli90"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/@usmanali_90"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/muhammad-usman-ali-294701242/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://medium.com/@usmanali23"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaMediumM />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://stackoverflow.com/users/24298448/usmanali"
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
