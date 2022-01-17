import React, { useState, useEffect} from 'react';
import { faAngleRight, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BlogSidebar.css'
import { Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';


const BlogSidebar = () => {

    const [post, setPost] = useState([])
    const [pages, setPage] = useState(0)

    useEffect(() => {


        setInterval(() => {

            fetch('http://localhost:8000/post?_page=1&_limit=4')
            .then((data)=> {

                let total_post = data.headers.get('x-total-count');

                setPage(total_post/4);

                return data.json();
            })
            .then((data) =>setPost(data));
            
        }, 2000);


    }, [])


    function changePost(page_number){

            let page = page_number.selected +1;

            fetch('http://localhost:8000/post?_page='+ page +'&_limit=4')
            .then((data)=> data.json())
            .then((data) =>setPost(data));
    }

    return (

        <>
            <div className="search">
                <input type="text" placeholder='Search' />
                <a href=""><FontAwesomeIcon icon={ faSearch }></FontAwesomeIcon></a>
            </div>

            <div className="list">
                <h5>Categories</h5>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="">Articles</a>
                        <hr />
                        <ul>
                            
                            <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="">Asides</a></li>
                            <hr />
                            <li><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon><a href="">News</a></li>
                            <hr />
                            
                        </ul>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="">Buying</a>
                        <hr />
                        <ul>
                            
                            <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="">Asides</a></li>
                            <hr />
                            <li><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon><a href="">News</a></li>
                            <hr />
                            
                        </ul>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="">Markup</a>
                        <hr />
                        <ul>
                            
                            <li><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon><a href="">Asides</a></li>
                            <hr />
                            <li><FontAwesomeIcon icon={ faAngleRight }></FontAwesomeIcon><a href="">News</a></li>
                            
                        </ul>
                        <hr />
                    </li>
                </ul>
            </div>

            <div className="latest-post">

                <h5>Latest Post</h5>

                {

                    post.length >0 ?
                        post.map((data)=>
                            <>
                                
                                    <Col>
                                        <img src={data.image} alt="" />
                                    </Col>
                                
                                    <Col>
                                        <h6>{data.title}</h6>
                                    </Col>
                               
                            </>
                        ):
                        
                            <>

                                <Col md={3}>
                                    <div className="skl">
                                        <Skeleton width='60px' height='60px'></Skeleton>
                                        
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="skl">
                                        <Skeleton width='60px' height='60px'></Skeleton>
                                        
                                    </div>
                                </Col>

                                <Col md={3}>
                                    <div className="skl">
                                        <Skeleton width='60px' height='60px'></Skeleton>
                                       
                                    </div>
                                </Col>

                        </>
                    }

            </div>
        </>

    )
}

export default BlogSidebar;
