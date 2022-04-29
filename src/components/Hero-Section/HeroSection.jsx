import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/img1.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Your Future<br /> is in your hands
              </h2>
              <p className="mb-5">
                Build your skills and promising career
                 <br /> with us and unlock doors of vast opportunities.
             </p>
            </div>
            
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
