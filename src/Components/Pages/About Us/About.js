import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <>
            <section className="top">
                <Container>
                    <Row>
                        <Col>
                            <h2 style={{color:"white", fontSize:"30px"}}>About Us</h2>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="mission">
                <Container>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <h2 style={{color:"black", fontSize:"30px", fontWeight:"bold", textAlign:"center"}}>We are Developer, We Build Solutions</h2>

                            <p style={{color:"black", fontSize:"20px", fontWeight:"lighter", textAlign:"center", paddingBottom:"50px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu, ac tincidunt mauris lacus sed leo.</p>
                        </Col>

                        <Col md={2}></Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <h4 style={{color:"black", fontSize:"16px", fontWeight:"500", textAlign:"left",paddingTop:"30px"}}>OUR MISSION</h4>

                            <p style={{color:"black", fontSize:"16px", fontWeight:"lighter", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.</p>
                        </Col>

                        <Col md={4}>
                            <h4 style={{color:"black", fontSize:"16px", fontWeight:"500", textAlign:"left",paddingTop:"30px"}}>OUR VISION</h4>
                            <p style={{color:"black", fontSize:"16px", fontWeight:"lighter", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.</p>
                        </Col>

                        <Col md={4}>
                            <h4 style={{color:"black", fontSize:"16px", fontWeight:"500", textAlign:"left",paddingTop:"30px"}}>WHY US</h4>
                            <p style={{color:"black", fontSize:"16px", fontWeight:"lighter", textAlign:"left"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum, nulla vel pellentesque consequat, ante nulla hendrerit arcu.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default About;
