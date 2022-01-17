import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import './Admin.css'
import dashboard from './Dashboard/Dashboard';

const Admin = () => {
    return (
        <>

            <section className="dash">
                <Container>
                    <Row>
                        <Col md={3}>

                            <Card className='dash-menu shadow'>
                                <Card.Body>
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <Link to="/dashboard">Dashboard</Link>
                                        </li>

                                        <li className="list-group-item">
                                            <Link to="/dashboard/profile">Profile</Link>
                                        </li>

                                        <li className="list-group-item">
                                            <Link to="/dashboard/settings">Settings</Link>
                                        </li>

                                        <li className="list-group-item">
                                            <Link to="/dashboard/password">Password Change</Link>
                                        </li>

                                        <li className="list-group-item">
                                            <Link to="/dashboard/logout">Log Out</Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        
                        </Col>

                        <Col md={9}>

                            <Outlet></Outlet>

                        </Col>
                    </Row>
                </Container>
            </section>
            
        </>
    )
}

export default Admin;
