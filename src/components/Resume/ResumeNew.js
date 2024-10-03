import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import frenchPdf from "../../Assets/../Assets/CV Lakhalifi Jamila.pdf";
import englishPdf from "../../Assets/../Assets/CV Lakhalifi Jamila english.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Download buttons for both French and English CV */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={frenchPdf} // French CV link
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (French)
          </Button>

          <Button
            variant="primary"
            href={englishPdf} // English CV link
            target="_blank"
            style={{ maxWidth: "250px", marginLeft: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (English)
          </Button>
        </Row>

        {/* Displaying the French CV */}
        <Row className="resume">
          <Document file={frenchPdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Displaying the English CV */}
        <Row className="resume">
          <Document file={englishPdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        {/* Download buttons for both French and English CV (repeated at the bottom) */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={frenchPdf} // French CV link
            target="_blank"
            style={{ maxWidth: "250px", marginRight: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (French)
          </Button>

          <Button
            variant="primary"
            href={englishPdf} // English CV link
            target="_blank"
            style={{ maxWidth: "250px", marginLeft: "10px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV (English)
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
