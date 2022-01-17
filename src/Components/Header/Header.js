import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { regular } from '@fortawesome/free-regular-svg-icons';


import logo from '../../images/img1.jpg';
import { Link, NavLink } from 'react-router-dom';

const Header = ({progress}) => {

    

    return (
        
        <>
            <div className="top-bar">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="intro">
                                <ul>
                                    <li><a href="#">About Us</a></li>

                                    <li><a href="#">Contact Us</a> </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>

                            <div className="social">

                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon> </a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon> </a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon> </a></li>
                                    
                                </ul>

                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="header shadow">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="logo">
                                <Link to='/'><img src={logo} alt="" /></Link>
                            </div>
                        </Col>

                        <Col md={9}>
                            <div className="header-contact">
                                <ul>
                                    <li>
                                        <label>SEND US AN EMAIL</label>
                                        <p>sumon@gmail.com</p>
                                    </li>

                                    <li>
                                        <label>CALL US NOW</label>
                                        <p>01711111111</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="header-menu">
                <Container>
                    <Row>
                        <Col md={9}>

                            <div className="menu">
                                <ul>
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><NavLink to='/Member'>Member</NavLink></li>
                                    <li><NavLink to='/Product'>Products</NavLink></li>
                                    <li><NavLink to='/Blog'>Blog</NavLink></li>
                                    <li><NavLink to='/About'>About Us</NavLink></li>
                                    <li><NavLink to='/Contact'>Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </Col>

                        
                        <Col md={3}>
                            <div className="right">
                                <ul>
                                    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header;
