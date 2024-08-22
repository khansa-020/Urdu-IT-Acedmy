// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Bootstrap
import { Container, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';


import globalVar from '../globalVar';
import Blog from './Blog/Blog';

export class Blogs extends Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {
            blogsArray: [],
        };

        // console.log("api", globalVar.url + 'blogs' )
        // console.log("api", this.state.blogsArray )

        // this.loadBlogs();
    }

    componentDidMount() {
        this.loadBlogs();
    }

    loadBlogs() {
        const { page } = this.state;
        // Fetching data from FaceBook Jest Repo
        fetch(globalVar.url + 'blogpost',
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ latestRecordCount: 0 })
            }
        )
            .then(res => res.json())
            .then(response => {
                this.setState({ blogsArray: response.data.data });
                console.log("BLOGS HAIN", this.state.blogsArray)
            })
            .catch(error => console.log(error));
    }


    render() {

        const { blogsArray } = this.state;

        return (

            <>

                <section className="section section-courses ">

                    <Container>
                        <h2 className="title mb-4">Blogs</h2>
                        <Row>
                            {blogsArray.map((b, index) => (

                                <Col sm={6} lg={4} xl={3} key={index}>
                                    {b && index < 4 && (

                                        <>
                                            <Blog
                                                key={index}
                                                id={b.id}
                                                name={b.Title}
                                                img={b.feature_image}

                                            />

                                            {/* <Link to={`/blogpost/${b.id}`}>

                                            <div className="upload-box">
                                                <div className=''>
                                                    <Image className='w-100' src={b.feature_image}
                                                    onError={({ currentTarget }) => {
                                                        currentTarget.onerror = null;
                                                        currentTarget.src = "./assets/images/upload-1.svg";
                                                    }} />
                                                </div> 
                                                <div className="upload-content">
                                                    <div className="title">{b.Title}</div>
                                                </div>
                                            </div>
                                        </Link> */}
                                        </>

                                    )}
                                </Col>
                            ))}

                            <Col md={12} className="text-center">
                                {/* <Link to={"courses/" + this.props.id}> */}
                                <Button as="a" href="/blogs" className='btn btn-link'>
                                    <span>See all blogs </span>
                                    <span className="icon"><img src={'assets/images/arrow-right.svg'} /></span>
                                </Button>
                                {/* </Link> */}
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Blogs