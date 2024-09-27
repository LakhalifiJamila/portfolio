import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import demoVideo from "../../Assets/../Assets/Deploy to Dokku Demo.mp4";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shared Bill Tip Calculator Mobile Application  | Java, Gradle, XML, Firebase, Android Studio"
              description="Design and development of an Android application to calculate shared bills and tips, including authentication and data storage."
              ghLink="https://github.com/LakhalifiJamila/SharedBillTipCalculator/tree/master"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Mailroom | Python, XML, Odoo, PostgreSQL"
              description="Development of a mailroom project in Odoo (Bureau d'Ordre) to manage the handling and tracking of incoming and outgoing documents within our school. The system allows for the registration, classification, and follow-up of correspondence, ensuring efficient document flow."
              ghLink="https://github.com/kawtarsabir1/Getion_bureau_ordre/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Inventory Management Application | Spring Boot, Spring Security, SQL/MySQL, Postman, Swagger, UML, Microservices Architecture"
              description="Design and development of a web-based inventory management application. This application streamlines the tracking of stock levels, orders, and deliveries, enabling users to efficiently manage inventory. It features a user-friendly interface for easy navigation, real-time updates on stock status, and reporting capabilities to help businesses optimize their inventory processes."
              ghLink="https://github.com/LakhalifiJamila/GestionDeStock_microservices/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Contact Management Web Application | Spring Boot, Spring Data JPA, Spring MVC, Hibernate, Maven, JSP,
              JSTL, MySQL"
              description="Created a web application for contact management with CRUD operations, search functionality and responsive user interface."
              ghLink="https://github.com/LakhalifiJamila/Gestion_Contacts/tree/main/gestion_contacts/gestion_contact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hotel Reservation Management Application | Java, Swing, SQL/MySQL"
              description="Design and development of a hotel booking web application. The application allows receptionist to book rooms and provides the administrator with a dashboard displaying monthly revenue. It also includes CRUD operations to manage employees and other operational aspects of the hotel, ensuring efficient and centralized management of bookings and staff."
              ghLink="https://github.com/LakhalifiJamila/Hotel_Reservation_Project/tree/main/Admin%20_%20Receptionist"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Students Registration Web Plateform | HTML, CSS, Javascript"
              description="Created a web Platform for students registration with CRUD operations, search functionality and responsive user interface."
              ghLink="https://github.com/LakhalifiJamila/Inscription_Etudiant/tree/main/Inscription%20Etudiants"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Deploy Spring boot 3 application to Dokku environment | Spring Boot, Gradle, Dokku, Docker, Script Shell/Linux , Nginx"
              description="Deploying a Spring Boot application on Dokku."
              demoLink={demoVideo}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Application for managing payments for teachers | AJAX, JavaScript, PHP, HTML, Bootstrap"
              description="Development of a web application designed to manage the payments of part-time teachers. It provides a user-friendly interface for administrators and teachers, ensuring efficient and transparent management of financial transactions."
              ghLink="https://github.com/LakhalifiJamila/-Gestion-des-Paiements-des-Professeurs-Vacataires/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Students Registration Web Plateform | HTML, CSS, Javascript"
              description="Created a web Platform for students registration with CRUD operations, search functionality and responsive user interface."
              ghLink="https://github.com/LakhalifiJamila/Inscription_Etudiant/tree/main/Inscription%20Etudiants"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
