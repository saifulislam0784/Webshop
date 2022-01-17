import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';
import { faBookOpen, faBriefcase, faHamburger, faHome, faPrescriptionBottle, faUser } from '@fortawesome/free-solid-svg-icons';
import './ProductSidebar.css'


const ProductSidebar = () => {
    return (
        <>

            <section className="cat">
                <Container>
                    <Row>
                        <Col>
                            <div className="cat-title">
                                <a href=""><FontAwesomeIcon icon={ faHamburger}></FontAwesomeIcon></a>
                                <h6>Shop By Category</h6>
                            </div>

                            <div className="cat-list">
                                <ul>
                                    <li><FontAwesomeIcon icon={ faHome }></FontAwesomeIcon><a href="">Home</a></li>
                                    <hr />
                                    <li><FontAwesomeIcon icon={ faBriefcase }></FontAwesomeIcon> <a href="">Categories</a> </li>
                                    <hr />
                                    <li><FontAwesomeIcon icon={ faBriefcase }></FontAwesomeIcon> <a href="">Products</a> </li>
                                    <hr />
                                    <li><FontAwesomeIcon icon={ faBriefcase }></FontAwesomeIcon> <a href="">Features</a> </li>
                                    <hr />
                                    <li><FontAwesomeIcon icon={ faBookOpen }></FontAwesomeIcon> <a href="">Blog</a></li>
                                    <hr />
                                    <li><FontAwesomeIcon icon={ faUser }></FontAwesomeIcon> <a href="">About Us</a></li>

                                </ul>
                                <div className="disc-sale">
                                    <h4>HUGE SALE 70% OFF</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
    )
}

export default ProductSidebar;

