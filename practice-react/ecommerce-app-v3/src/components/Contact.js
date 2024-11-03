// src/components/Contact.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Contact Us</h1>
          <div className="text-center">
            <h4>Get in Touch</h4>
            <p>
              If you have any questions or need assistance, feel free to reach
              out to us!
            </p>
            <p>
              <strong>Email:</strong> dummy@example.com
            </p>
            <p>
              <strong>Phone:</strong> +1234567890
            </p>
          </div>
          <div class="address-block">
            <section class="address-map">
              <h4>Reach us here at</h4>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.121310506327!2d88.48012421418682!3d22.574565738589186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b20f029fe9%3A0x94c3cd5abd4903db!2sCognizant%20Technology%20Solutions!5e0!3m2!1sen!2sin!4v1670392497988!5m2!1sen!2sin"
                height="350"
                style={{ border: 0, width: 'clamp(300px, 100%, 650px)',}} // Use double curly braces for inline styles
                allowFullScreen // Use camelCase for boolean attributes
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" // Use camelCase for attributes
              ></iframe>
            </section>
            <address>
              <h4>Cognizant Technology Solutions</h4>
              Unitech Infospace, DH Block(Newtown), Action Area I Newtown,
              Kolkata, West Bengal 700156
            </address>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
