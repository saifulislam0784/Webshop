import React, { useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Blog.css'
import BlogSidebar from '../../Sidebar/BlogSidebar/BlogSidebar';
import Skeleton from 'react-loading-skeleton';
import ReactPaginate from 'react-paginate';

const Blog = () => {

    const [post, setPost] = useState([])
    const [pages, setPage] = useState(0)

    useEffect(() => {


        

            fetch('http://localhost:8000/post?_page=1&_limit=6')
            .then((data)=> {

                let total_post = data.headers.get('x-total-count');

                setPage(total_post/6);

                return data.json();
            })
            .then((data) =>setPost(data));
            
       


    }, [])


    function changePost(page_number){

            let page = page_number.selected +1;

            fetch('http://localhost:8000/post?_page='+ page +'&_limit=6')
            .then((data)=> data.json())
            .then((data) =>setPost(data));
    }

    return (
            <>
            <section className="page-top">
                <h2>BLOG</h2>
            </section>

            <section className="blog-page">

                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="blog-left">
                                    <BlogSidebar></BlogSidebar>
                            </div>
                        </Col>

                        <Col md={9}>

                            <Row>

                                {

                                    post.length >0 ?
                                        post.map((data)=>
                                            <Col md={4}>
                                                <img src={data.image} alt="" />
                                                <h4>{data.title}</h4>
                                                <p>
                                                    {data.desc}
                                                </p>
                                                <a href="">read more...</a>
                                            </Col>
                                        ):
                                        
                                           <>

                                                <Col md={4}>
                                                    <div className="skl">
                                                        <Skeleton width='150px' height='150px'></Skeleton>
                                                        <Skeleton width='200px' height='15px'></Skeleton>
                                                        <Skeleton width='280px' height='15px'></Skeleton>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="skl">
                                                        <Skeleton width='150px' height='150px'></Skeleton>
                                                        <Skeleton width='200px' height='15px'></Skeleton>
                                                        <Skeleton width='280px' height='15px'></Skeleton>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="skl">
                                                        <Skeleton width='150px' height='150px'></Skeleton>
                                                        <Skeleton width='200px' height='15px'></Skeleton>
                                                        <Skeleton width='280px' height='15px'></Skeleton>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="skl">
                                                        <Skeleton width='150px' height='150px'></Skeleton>
                                                        <Skeleton width='200px' height='15px'></Skeleton>
                                                        <Skeleton width='280px' height='15px'></Skeleton>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
                                                    <div className="skl">
                                                        <Skeleton width='150px' height='150px'></Skeleton>
                                                        <Skeleton width='200px' height='15px'></Skeleton>
                                                        <Skeleton width='280px' height='15px'></Skeleton>
                                                    </div>
                                                </Col>

                                                <Col md={4}>
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
                           
                        </Col>
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default Blog;
