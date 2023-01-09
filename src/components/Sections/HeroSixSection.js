import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import classes from "./HeroSixSection.module.css";

const HeroSixSection = () => {
  //Rendering the Testimonial Section
  return (
    <section id="testimonials">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Testimonials</h2>
              <p>This is what our client are saying</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_content}>
          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Sourav Saha</h4>
              <p className={classes.text_location}>Mymensingh</p>
              <p className={classes.text_content}>
                With a Homely Eats meal, you can serve delectable, home-cooked
                meals to your family and friends in any location, anytime.
                anyday!
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Muzahid Pial</h4>
              <p className={classes.text_location}>Dhaka</p>
              <p className={classes.text_content}>
                {" "}
                Be it a small gathering of friends or a large event with
                hundreds of people, you'll always be prepared. whether you're at
                home or on the go.{" "}
              </p>
            </div>
          </Col>

          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="450"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Abdullh Al Mubin</h4>
              <p className={classes.text_location}>Natore</p>
              <p className={classes.text_content}>
                No need to worry about any of this anymore with your app. Homely
                Eats are made with the highest quality ingredients for you and
                your family.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //ENd
};

export default HeroSixSection;
