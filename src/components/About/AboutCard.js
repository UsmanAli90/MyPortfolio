import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Usman Ali </span>
            from <span className="purple"> Faisalabad, Pakistan.</span>
            <br />
            I am currently pursuing my BSCS at FAST NUCES in Pakistan. My journey in web development has been dynamic, with a focus on the <span className="purple"> MERN Stack</span>, where I've led various projects utilizing <span className="purple">React.js</span> for frontend and <span className="purple"> Node.js</span> for backend functionalities. Additionally, I've delved into Python, employing <span className="purple">Django</span> for backend development. Beyond coding, my fascination with <span className="purple">Generative AI and LLMs</span> drives me to explore the forefront of technology. Being a part of the <span className="purple"> Aspire Leaders program by Harvard School of Business</span> further fuels my ambition for personal and professional growth.
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Content Creation
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new trends
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
