import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faConnectdevelop, faMailchimp, faSearchengin, faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons';
import { faClock, faLocationArrow, faMailBulk, faPhone, faSearch, faSearchLocation, faServer, faTimes, faTimesCircle, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css'

const Contact = () => {
    return (
        <>

            <section className="contact-top">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h2 style={{color:"black", fontWeight:"bold"}}>Contact With Us</h2>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contact">
                <Container>
                    <Row>
                        <Col md={6}>

                            <h2>Contact Us</h2>
                            <p>Feel free to ask for details, don't save any questions!</p>
                            
                            <Form className='frm'>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Name" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Subject" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={3} placeholder="textarea"/>
                                    </Form.Group>
                                    <Button className='btn' variant="primary" type="submit">
                                        Send Message
                                    </Button>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={6}>
                            <div className="add">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faSearchLocation}></FontAwesomeIcon>
                                        <a href="">Address: 1234 Street Name, City Name, United States</a>
                                    </li>

                                    <li>
                                        <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                                        <a href="">Phone: (123) 456-789</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon>
                                        <a href="">Email: mail@example.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="hours">
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                        <a href="">Monday - Friday 9am to 5pm</a>
                                    </li>

                                    <li>
                                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                        <a href="">Saturday - 9am to 2pm</a>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                        <a href="">Sunday - Closed</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="in-touch">
                                <h4 style={{ paddingTop:"25px", color:"blue" }}>Get in touch</h4>
                                <p style={{ fontWeight:"lighter" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsam, quibusdam quaerat labore repellendus qui! Eius nostrum molestiae ipsam, illum repellat cumque laborum doloribus a veritatis quisquam vel recusandae distinctio.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
    )
}

export default Contact
