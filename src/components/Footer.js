import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    // <Container fluid className="footer">
    //   <Row>

    //     <Col md="4" className="footer-copywright">
    //       <h3 style={{ fontSize: "9px" }}>
    //         Designed and Developed by Soumyajit Behera
    //       </h3>
    //     </Col>

    //     <Col md="4" className="footer-copywright">
    //       <h3>Copyright © {year} </h3>
    //     </Col>
    //     <Col md="4" className="footer-body">
    //       <ul className="footer-icons">
    //         <li className="social-icons">
    //           <a
    //             href="https://github.com/LakhalifiJamila"
    //             style={{ color: "white" }}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <AiFillGithub />
    //           </a>
    //         </li>
    //         <li className="social-icons">
    //           <a
    //             href="https://www.linkedin.com/in/jamila-lakhalifi-137092219"
    //             style={{ color: "white" }}
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <FaLinkedinIn />
    //           </a>
    //         </li>
    //       </ul>
    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright text-center">
          <h3 style={{ fontSize: "12px" }}>
            Designed and Developed by Soumyajit Behera
          </h3>
        </Col>

        <Col md="4" className="footer-copywright text-center">
          <h3>Copyright © {year}</h3>
        </Col>

        <Col md="4" className="footer-body text-center">
          <ul
            className="footer-icons"
            style={{ listStyleType: "none", padding: 0 }}
          >
            <li
              className="social-icons"
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              <a
                href="https://github.com/LakhalifiJamila"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li
              className="social-icons"
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              <a
                href="https://www.linkedin.com/in/jamila-lakhalifi-137092219"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
