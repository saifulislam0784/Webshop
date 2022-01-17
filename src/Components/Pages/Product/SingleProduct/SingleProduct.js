import React, { useState, useEffect } from 'react';
import { faPhoneAlt, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleProduct.css'; 

const SingleProduct = () => {


        let {productId} = useParams();

        const [single, setSingle] = useState([]);
        const [related, setRelated] = useState([]);

        let { name, image, desc, price, saleprice, stock } = single;

        useEffect(() => {

            fetch('http://localhost:8000/products/' + productId)
            .then((data) => data.json())
            .then((data) =>{

                setSingle(data)

                fetch('http://localhost:8000/category/' + data.categoryId + '/products')
                .then((data) => data.json())
                .then((data) => setRelated(data));
            
            });
           
        }, [])

    return (
        <>

            <section className="page-header">

                            <Container>
                                <Row>
                                    <Col md={6}>
                                        <div className="search-widget">
                                            <input type="text" placeholder='Search' />
                                            <a href=""><FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon></a>
                                        </div>

                                        <div className="drop">
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light'>
                                                        All Categories
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                        <Dropdown.Item>Burger</Dropdown.Item>
                                                        <Dropdown.Item>Pizza</Dropdown.Item>
                                                        <Dropdown.Item>Pasta</Dropdown.Item>
                                                        <Dropdown.Item>Chowmein</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                            
                                    </Col>

                                    <Col md={3}>
                                        <div className="cont">
                                            <ul>
                                                <li>
                                                    <a href=""><FontAwesomeIcon icon={ faPhoneAlt }></FontAwesomeIcon></a>
                                                </li>

                                                <li>
                                                    <h6>CALL US NOW</h6>
                                                    <p style={{color:"white"}}>+01711111111</p>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </Col>

                                    <Col md={3}>
                                        <div className="header-right">
                                            <ul>
                                                <li>
                                                    <a href=""><FontAwesomeIcon icon={ faUser }></FontAwesomeIcon></a>
                                                    <a href=""><FontAwesomeIcon icon={ faShoppingBag }></FontAwesomeIcon></a>
                                                    <a href=""><FontAwesomeIcon icon={ faShoppingBag }></FontAwesomeIcon></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
            </section>

            <section className="s-product">
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={ image } alt="" />
                        </Col>

                        <Col md={6}>

                            <div className="s-product-info">
                                <h2 className='p-name'>{ name }</h2>
                                <div className="pricing">
                                    <span className='regular'>TK20000</span>
                                    <span className='sale'>TK18000</span>
                                </div>
                                <div className="desc">
                                    <p>{ desc }</p>
                                </div>


                                    {

                                        stock >=10?

                                        <div className="stock">
                                            Available Stock: { stock }
                                        </div>

                                        :

                                        <div className="stock out">
                                            Available Stock: { stock }
                                        </div>

                                    }

                                

                                <div className="cat">
                                    CATEGORIES: <span>Mobile Phone</span>
                                </div>

                                <div className="tag">
                                TAGS: <span>Mobile Phone</span>
                                </div>

                                {/* <div className="color">
                                    <ul>
                                        <li><a className='filter-color enabled' style={{ bacgroundColor:'green' }} href="">Green</a></li>
                                        <li><a href=""></a></li>
                                    </ul>
                                </div> */}

                                <Button><FontAwesomeIcon transform=" left-6" icon={ faShoppingBag }></FontAwesomeIcon>ADD TO CART</Button>
                            </div>

                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='related-p'>
                <Container>
                    <Row>
                                
                        <h2>RELATED PRODUCTS</h2>

                            {

                                related.map(data =>
                                    
                                        <Col md={3}>
                                            <div className="related-item">
                                                <a href="">
                                                    <Card>
                                                        <Card.Img src={ data.image }></Card.Img>
                                                        <Card.Body>
                                                            <Card.Title><h4>{ data.name }</h4></Card.Title>
                                                            <Card.Text >
                                                                <div className="pricing">
                                                                    <span className='regular'>TK20999 </span>
                                                                    <span className='sale'>TK19999 </span>
                                                                </div>
                                                                <Button><FontAwesomeIcon transform=" left-6" icon={ faShoppingBag }></FontAwesomeIcon>ADD TO CART</Button>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </a>
                                            </div>
                                        </Col>
                                    )
                            } 
                    </Row>
                </Container>
            </section>
            
        </>
    )
}

export default SingleProduct;
