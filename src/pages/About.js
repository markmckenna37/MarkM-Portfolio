import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { GrLinkedin } from "react-icons/gr"
import { AiFillGithub } from "react-icons/ai"
import { RiFilePaper2Line } from "react-icons/ri"
import { CgMail } from "react-icons/cg"
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/HEH30Gm.jpg">
        <h1>Mark McKenna</h1>
        <h2>Full Stack Web Developer</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Web Designer and Developer based in Denver, CO</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
             I am a web developer with a love for music and art, and a knack for creative problem solving. I want to use my skills and experience to help others grow their brand and messages while learning aggressively every day. Recently received a Full-Stack Web Development certification from Denver University Ideal
              positions include JavaScript, back end Node.js development, and
              SQL or NoSQL (MongoDB) with cloud services.
            </p>
            <p>
              I also have great interest in game development and modification. I
              spend a lot of my free time creating addons and apps for currently
              existing games.
            </p>
            <p>
              <ul>
                <li>
                Languages: JavaScript, HTML, CSS, MATLAB
                </li>
                <li>
                Frameworks: ReactJS, NodeJS, NPM, Express
                </li>
                <li>
                Cloud Services: Heroku, Git
                </li>
                <li>
                Data Models: MySQL, Sequelize, MongoDB, Mongoose, CRUD
                </li>
              </ul>
            </p>

          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
        <Tippy content="LinkedIn">
            <a href={"https://www.linkedin.com/in/mark-mckenna-a3a7358b/"}>
            <GrLinkedin style={{width: 75, height: 75, marginRight: 50}}/>
            </a>
        </Tippy>
        <Tippy content="GitHub">
            <a href={"https://github.com/markmckenna37"}>
            <AiFillGithub style={{width: 75, height: 75, marginRight: 50}}/>
            </a>
        </Tippy>
        <Tippy content="Email">
            <a href={"mailto:markmckenna37@gmail.com"}>
            <CgMail style={{width: 75, height: 75, marginRight: 50}}/>
            </a>
        </Tippy>
        <Tippy content="Resume">
            <a href={"https://docs.google.com/document/d/1pEswtUqygJhLMWVWgKJunjudw75fTIAuYp2Pu53s4X8/edit?usp=sharing"}>
            <RiFilePaper2Line style={{width: 75, height: 75}}/>
            </a>
        </Tippy>
        </Row>
      </Container>
    </div>
  );
}

export default About;
