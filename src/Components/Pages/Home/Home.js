import React from 'react';
import { faConnectdevelop, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';


const Home = () => {

    const [post, setPost] = useState([])
    const [pages, setPage] = useState(0)

    useEffect(() => {


            fetch('http://localhost:8000/post?_page=1&_limit=4')
            .then((data)=> {

                let total_post = data.headers.get('x-total-count');

                setPage(total_post/4);

                return data.json();
            })
            .then((data) =>setPost(data));


    }, [])


    function changePost(page_number){

            let page = page_number.selected +1;

            fetch('http://localhost:8000/post?_page='+ page +'&_limit=4')
            .then((data)=> data.json())
            .then((data) =>setPost(data));
    }

    return (
        
        <>
            <section className="slider">
            <Carousel>
                <Carousel.Item>
                    <img src="https://cdn.corporatefinanceinstitute.com/assets/home-office1.jpeg
                      " alt="" />
                    <Carousel.Caption>
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src=" https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg " alt="" />
                    <Carousel.Caption>
                        <h2>Do you need web design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img src=" https://media.istockphoto.com/photos/male-programmer-working-on-new-project-picture-id1274948583?b=1&k=20&m=1274948583&s=170667a&w=0&h=TYb8QHIT9JT1hHmIh9oB5ClUuxenJ51b8OlSbHcXvqA= " alt="" />
                    <Carousel.Caption>
                        <h2>Do you need web design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </section>

            <section className="services">
                <Container>
                    <Row>
                        <Col>
                            <h2>Our Services</h2>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Card className='shadow'>
                                <Card.Body>
                                    <div className="service-item">
                                        <a href=""><FontAwesomeIcon icon={ faConnectdevelop }></FontAwesomeIcon></a>
                                        <h4>Website Design</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium voluptatem ipsam necessitatibus obcaecati praesentium reprehenderit ea vel minima fugiat?</p>
                                    </div>
                                </Card.Body>    
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='shadow'>
                                <Card.Body>
                                    <div className="service-item">
                                        <a href=""><FontAwesomeIcon icon={ faConnectdevelop }></FontAwesomeIcon></a>
                                        <h4>Website Development</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium voluptatem ipsam necessitatibus obcaecati praesentium reprehenderit ea vel minima fugiat?</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className='shadow'>
                                <Card.Body>
                                    <div className="service-item">
                                        <a href=""><FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon></a>
                                        <h4>SEO Service</h4>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus laudantium voluptatem ipsam necessitatibus obcaecati praesentium reprehenderit ea vel minima fugiat?</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="we-are">
                <Container>
                    <Row>
                            <Col md={6}>
                                <div className="we-are-info">
                                    <h4>Who <span>We Are</span></h4>
                                    <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi soluta optio assumenda quidem exercitationem!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit nesciunt unde porro soluta nisi officiis facilis dignissimos, animi ea provident esse id qui aliquid nihil. Eligendi nihil laborum ipsa?</p>

                                    <Button variant="dark" size="lg">Learn More</Button>
                                </div>
                            </Col>
                      

                        <Col md={6}>
                            <img className='one' src="https://media.istockphoto.com/photos/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-picture-id1146472948?k=20&m=1146472948&s=612x612&w=0&h=uJMkt7Jtt7sv73o77K3WcqleE6Jlsl5fhKG_6ug1jPA=" alt="" />

                            <img className='two' src="https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2ZmaWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />

                            <img className='three' src="https://thumbs.dreamstime.com/b/portrait-young-smiling-cheerful-entrepreneur-casual-office-making-phone-call-working-laptop-155845824.jpg" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>

           <section className="our-team">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="team-member"> 
                                <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg" alt="" />
                                <h4>Saiful Islam</h4>
                                <h5>Mern Developer</h5>              
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className="team-member"> 
                                <img src="https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8=" alt="" />
                                <h4>Sanaf Islam</h4>
                                <h5>PHP Developer</h5>              
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="team-info">
                                <h4>Meet <span>Our Team</span></h4>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi soluta optio assumenda quidem exercitationem!</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas fugit nesciunt unde porro soluta nisi officiis facilis dignissimos, animi ea provident esse id qui aliquid nihil. Eligendi nihil laborum ipsa?</p>

                                <Button variant="dark" size="lg">Learn More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
           </section>



           <section className="blog-post">
               <Container>
                   <h2 style={{color:"white"}}>Latest Post</h2>
                   <Row>
                            {

                                post.length >0 ?
                                    post.map((data)=>
                                        <Col md={3}>
                                            <img src={data.image} alt="" />
                                            <h4 style={{color:"white"}}>{data.title}</h4>
                                            <p style={{color:"white"}}>
                                                {data.desc}
                                            </p>
                                            <a style={{color:"white"}} href="">read more...</a>
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
                                        containerClassName={' pagination justify-content-center my-4 '}
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
                                        onPageChange={ changePost }
                                />
                        </Col>
                   </Row>
               </Container>
           </section>
        </>
    )
}

export default Home;
