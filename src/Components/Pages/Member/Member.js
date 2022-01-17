import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Col, Container, Row } from 'react-bootstrap';
import './Member.css'
import ReactPaginate from 'react-paginate';

const Member = () => {

    const [member, setMember] = useState([])
    // const [pages, setPages] = useState(0)

        useEffect(() => {

            fetch('http://localhost:8000/users')
            .then((data)=> data.json())
            .then((data) =>setMember(data))
            
        }, [])


        // function changeMember(page_number){

        //     let page = page_number.selected +1;
    
        //         fetch('http://localhost:8000/users?_page='+ page +'&_limit=4')
        //         .then((data)=> data.json())
        //         .then((data) =>setMember(data));
        // }


    return (
        <>
            <section className="page-top">
                <Container>
                    <Row>
                        <Col>
                            <ul>
                                <li>Home</li>
                                <li>Members</li>
                            </ul>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            <h2>Members</h2>
                        </Col>
                    </Row>
                </Container>
            </section>  

            <section className="team">
                <Container>
                    <Row>
                        <div className="meet-team">
                            <h2>Meet the<span>Team</span></h2>
                        </div>
                    </Row>
                    
                    <Row>
                            {
                                member.map((data) =>

                                    <Col md={3}>
                                        <div className="t-member">
                                            <img src={data.image} alt="" />
                                            <h5>{data.name}</h5>
                                            <h6>{data.skill}</h6>
                                            <p>{data.desc}</p>
                                        </div>
                                        <div className="social">
                                            <ul>
                                                <li><a href=""><FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon></a></li>
                                                <li><a href=""><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></a></li>
                                                <li><a href=""><FontAwesomeIcon icon={ faLinkedinIn }></FontAwesomeIcon></a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                
                                )      
                            }
                    </Row>

                    {/* <Row>
                        <Col>
                                <ReactPaginate

                                        pageCount={pages}
                                        containerClassName={' pagination justify-content-center my-5 '}
                                        pageClassName={'page-item'}
                                        pageLinkClassName={'page-link'}
                                        previousClassName={'page-item'}
                                        previousLinkClassName={'page-link'}
                                        nextClassName={'page-item'}
                                        nextLinkClassName={'page-link'}
                                        previousLabel={'<<'}
                                        nextLabel={'>>'}
                                        breakLabel={'....'}
                                        breakClassName={'page-item'}
                                        breakLinkClassName={'page-link'}
                                        activeClassName={'active'}
                                        onPageChange={ changeMember }

                                />

                        </Col>
                    </Row> */}
                </Container>
            </section>          
        </>
    )
}

export default Member;
