import {React, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardImg, Carousel, Col, Container, Dropdown, Row } from 'react-bootstrap';
import './Product.css'
import {faPhoneAlt, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import ProductSidebar from '../../Sidebar/ProductSidebar/ProductSidebar';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';

const Product = () => {

        const [products, setProduct] = useState([])
        const [pages, setPages] = useState(0)


    useEffect(() => {

            fetch('http://localhost:8000/products?_page=1&_limit=8')
        .then((data) => {


                let total_item = data.headers.get('x-total-count');

                setPages(total_item/8);

            return data.json();
        })
        .then((data) => setProduct(data));
            
    }, [])


    function changeProduct(page_number){

        let page = page_number.selected + 1;

        fetch('http://localhost:8000/products?_page='+ page +'&_limit=8')
        .then((data) => data.json())
        .then((data) => setProduct(data));

    }

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
                                            <Dropdown.Item>Electronics</Dropdown.Item>
                                            <Dropdown.Item>Cloth</Dropdown.Item>
                                            <Dropdown.Item>Baby</Dropdown.Item>
                                            <Dropdown.Item>Man</Dropdown.Item>
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

            <section className="flash-sale">
                <Container>
                    <Row>
                        <Col md={3}>
                            <ProductSidebar></ProductSidebar>
                        </Col>

                        <Col md={9}>
                        <section className="flash-sale-p">
                            <Carousel>
                                <Carousel.Item>
                                    <img src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
                                    
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img src=" https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8&w=1000&q=80 " alt="" />
                                    
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img src=" https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 " alt="" />
                                    
                                </Carousel.Item>
                            </Carousel>
                        </section>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="f-product">
                <Container>

                    <Row>
                        <Col md={6}> <h2>FEATURED PRODUCTS</h2></Col>
                        <Col md={6}>
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
                                        onPageChange={ changeProduct }
                                />
                        </Col>
                    </Row>
                    <Row>

                        {

                            products.length >0? 
                                 products.map((data) =>

                                    <Col md={3}>
                                        <div className="product-item">
                                            <Link to={'/Product/' + data.id }>
                                                <Card className=" shadow">
                                                    <Card.Img src={ data.image }></Card.Img>
                                                    <Card.Body>
                                                        <Card.Title><h4>{ data.name }</h4></Card.Title>
                                                        <Card.Text >

                                                            { data.saleprice== "" ?

                                                                <span className='regular'>TK{ data.price } </span>

                                                                :

                                                                <>
                                                                    <span className='regular'>TK{ data.price } </span>
                                                                    <span className='sale'>TK{ data.saleprice } </span>
                                                                </>

                                                            }
                                                                <div className="stock">
                                                                    <h6>Stock: { data.stock } pcs</h6><hr />
                                                                </div>
                                                                
                                                            <Button><FontAwesomeIcon transform=" left-6" icon={ faShoppingBag }></FontAwesomeIcon>ADD TO CART</Button>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </div>

                                    </Col>

                            ):
                            
                                <>
                                    <Col md={3}>
                                        <div className="skl">
                                            <Skeleton width='150px' height='150px'></Skeleton>
                                            <Skeleton width='200px' height='15px'></Skeleton>
                                            <Skeleton width='280px' height='15px'></Skeleton>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className="skl">
                                            <Skeleton width='150px' height='150px'></Skeleton>
                                            <Skeleton width='200px' height='15px'></Skeleton>
                                            <Skeleton width='280px' height='15px'></Skeleton>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className="skl">
                                            <Skeleton width='150px' height='150px'></Skeleton>
                                            <Skeleton width='200px' height='15px'></Skeleton>
                                            <Skeleton width='280px' height='15px'></Skeleton>
                                        </div>
                                    </Col>

                                    <Col md={3}>
                                        <div className="skl">
                                            <Skeleton width='150px' height='150px'></Skeleton>
                                            <Skeleton width='200px' height='15px'></Skeleton>
                                            <Skeleton width='280px' height='15px'></Skeleton>
                                        </div>
                                    </Col>
                                </>
                        }
                       
                    </Row>

                    <Row>
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
                                        onPageChange={ changeProduct }

                                />

                        </Col>
                    </Row>
                </Container>
                <hr />
            </section>
            
        </>
    )
}

export default Product;
