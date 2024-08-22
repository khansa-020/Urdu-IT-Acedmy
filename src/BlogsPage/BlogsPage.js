import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Container, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';

import globalVar from '../globalVar';

import Course from '../Courses/Course/Course';
import Discovers from '../Discovers/Discovers';
import Blog from '../Blogs/Blog/Blog';

export class BlogsPage extends Component {
    // static propTypes = {}
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

                <section className="section section-courses inner-page">

                    <Container>

                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
                        </Breadcrumb>

                        <h2 className="title page-title">Blogs</h2>
                        {/* <p>Explore our blogs</p> */}


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
                                        </>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <Discovers />
            </>
        )
    }
}

export default BlogsPage