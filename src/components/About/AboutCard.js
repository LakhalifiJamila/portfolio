import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi ! I am <span className="purple">Lakhalifi Jamila </span>
            from <span className="purple"> Agadir, Morocco.</span>
            <br />
            I am a Software Engineer and have experience working with a variety
            of technologies, including Java Spring Boot, Angular, React js,
            Docker, PL/SQL and many more technologies.
            <br />
            My journey in software engineering began with a love for
            problem-solving and creating applications that make a difference.
            During my education, I worked on multiple projects, including
            building full-stack web applications that improved user experience
            in healthcare, and more.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Indeed, with hardship comes ease."{" "}
          </p>
          <footer className="blockquote-footer">Quran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
