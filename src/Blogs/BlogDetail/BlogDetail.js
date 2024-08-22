import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './BlogDetail.scss'
import { Link } from "react-router-dom";
import { Container, Row, Breadcrumb, Spinner, Col, Image, Button } from 'react-bootstrap';
import globalVar from '../../globalVar';

export class BlogDetail extends React.Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {
            blogDetail: [],
            id: window.location.pathname.split("/").pop(),
            c_url: window.location.href,
            showLoader: true
        };
        // console.log("ALAI", this.state.c_url)
    }

    componentDidMount() {
        this.loadBlog(this.state.id);
    }

    loadBlog(id) {
        const filterId = parseInt(id, 10);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id })
        };
        fetch(globalVar.url + 'blogpost_single_blog', requestOptions)
            .then(res => res.json())
            .then(response => {
                this.setState(
                    { blogDetail: response.data },
                    () => console.log("Single Blog Detail", this.state.blogDetail)
                );

                this.state.showLoader = false;
            }
            )
            .catch(error => console.log(error));
    }

    render() {
        // const { certificationDetail } = this.state.certificationDetail;
        // const cimg = this.props.img.split('.');
        return (
            <>

                <section className="section section-courses inner-page">

                    <Container>

                        {
                            this.state.showLoader ?
                                <>
                                    <div className='d-flex align-items-center justify-content-center' style={{ height: '250px', }}>
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    </div>
                                </>
                                :
                                <>

                                    <Breadcrumb>
                                        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                        <Breadcrumb.Item href="/blogs">Blogs</Breadcrumb.Item>
                                        <Breadcrumb.Item active>{this.state.blogDetail.Title}</Breadcrumb.Item>
                                    </Breadcrumb>

                                    <div className='mb-4'>


                                        <h2 className="title page-title d-flex align-items-center">
                                            <span>{this.state.blogDetail.Title}</span>
                                            {/* <span className='d-inline-flex ms-3'>
                                                <span className='certificateStatus-tag'>Completed</span>
                                            </span> */}
                                        </h2>
                                        <div className='mx-auto w-50 mb-3'>                                            
                                            <Image className='w-100' src={this.state.blogDetail.feature_image}
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src = "./assets/images/courses/course-thumbnail.jpg";
                                                }}
                                            />
                                        </div>
                                        <p>{this.state.blogDetail.Detail}</p>
                                    </div>
                                </>
                        }
                    </Container>
                </section>

                {/* <AvailableExams certificationId={this.state.certificationDetail.certificationId} /> */}
                {/* <AvailableExams /> */}

                {/* <Discovers /> */}

            </>
        )
    }
}

export default BlogDetail