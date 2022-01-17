
import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    return (

        <Fragment>
            <div className="footer">
                <Container>
                    <Row>
                        <Col md={3}>
                            <h3>Contact Details</h3>
                            <p> 
                                Porto Template 123 <br />
                                Porto Blvd, Suite  <br />
                                New York
                            </p>
                        </Col>

                        <Col md={3}>
                            <h3>Opening Hours</h3>
                            <p>Mon-Fri: <h6>8:30 am to 5:00 pm</h6> </p>
                            <p>Saturday: <h6>9:30 am to 1:00 pm</h6> </p>
                            <p>Sunday: <h6>Closed</h6> </p>
                        </Col>

                        <Col md={3}>
                            <h3>Call Us Now</h3>
                            <h2>(800) 123 4567</h2>
                            <p>Sales:<h6>(800) 123 4568</h6></p>
                        </Col>

                        <Col md={3}>
                            <h3>Social Media</h3>
                            <div className="social-media">
                                <ul>
                                    <li><a href="#"> <FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon> </a></li>
                                    <li><a href="#"> <FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon> </a></li>
                                    <li><a href="#"> <FontAwesomeIcon icon={ faLinkedinIn }></FontAwesomeIcon> </a></li>
                                </ul>
                            </div>
                        </Col>

                        
                    </Row>

                    <Row>
                        <div className="copyright">
                            <hr />
                            <p>© copyright 2021. All Rights Reserved.</p>
                        </div>
                    </Row>

                </Container>

            </div>
        </Fragment>
        
        
        
    )
}

export default Footer;
