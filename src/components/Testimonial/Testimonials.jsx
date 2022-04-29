import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/img5.jpg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 800,
    // slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                          Choosing the right software development company in order to have dreams 
                          achieved is a difficult task.I am happy i made the right decision.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                       Learnt new technologies with highly focused and motivated teachers.
                       Believe and join it to make a bright future with right path guidance.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Rakesh</h6>
                        {/* <p>California, United State</p> */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        I am glad i made the best decision to join here to improve my knowledge.
                        Learnt the clean code implementation with superior teaching.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sonal</h6>
                        {/* <p>California, United State</p> */}
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
