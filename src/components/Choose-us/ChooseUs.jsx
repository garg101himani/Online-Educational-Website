import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/img1.jpg";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          {/* <Col lg="6" md="6"> */}
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
               WE ARE THE BEST WITH HIGHLY QUALIFIED TEACHERS. OUR APPROACH IS DISTINCLY INNOVATIVE.
               WE HAVE HIGHLY SKILLED TEACHERS WITH EXCELLENT TECHNICAL KNOWLEDGE AND EXPERIENCE IN USING THE LATEST SOFTWARE 
               STANDARDS.WE HAVE BUILT A LARGE POOL OF KNOWLEDGE THAT WE APPLY TO DELIVER SOLUTIONS THAT MEET CLIENTS NEEDS AND
               EXPECTATIONS.WE DELIEVER AMAZING USER EXPERIENCES THROUGH TECHNOLOGY TO THE PEOPLE WHO TRUSTED US AROUND THE GLOBE.
               BEING THE TECH SPECIALISTS, WE CREATE SOLUTIONS THAT ALLOW US TO DO IT ALL IN AN EASY AND SEAMLESS MANNER.BE WITH US 
               TO GROW TOGETHER.
             
              </p>
            </div>
          {/* </Col> */}

          {/* <Col lg="6"  md="6"></Col>
          <img src={heroImg} alt="" className="w-100 hero_img"/>
          </Col> */}

          {/* <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
               z
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
