import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Container, Row, Breadcrumb, Spinner, Col, Image, Button } from 'react-bootstrap';
import Discovers from '../../Discovers/Discovers';
import AvailableExams from '../AvailableExams/AvailableExams';
import Certificates from '../Certificates/Certificates';

import globalVar from '../../globalVar';

export class CourseDetail extends React.Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {
            courseDetail: [],
            id: window.location.pathname.split("/").pop(),
            showLoader: true
        };
        // this.loadCourses(this.state.id);
    }

    componentDidMount() {
        this.loadCourses(this.state.id);
    }

    loadCourses(id) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ vendorId: id })
        };
        fetch(globalVar.url + 'courses_details', requestOptions)
            .then(response => response.json())
            .then(
                response => {
                    this.setState({ courseDetail: response.data }
                        , () => console.log("Course Model Data", this.state.courseDetail)
                    );
                    this.state.showLoader = false;
                }
            )
            .catch(error => console.log(error));

            console.log( 'courseDetail', this.state.courseDetail )
    }

    render() {
        // const { courseDetail } = this.state.courseDetail;
        // const cimg = this.props.img.split('.');
        return (
            <>

                <section className="section section-courses inner-page">

                    <Container>


                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="/courses">Courses</Breadcrumb.Item>
                            <Breadcrumb.Item active>{this.state.courseDetail.vendor_Name}</Breadcrumb.Item>
                        </Breadcrumb>

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
                                    <div className='mb-4'>

                                        <h2 className="title page-title">{this.state.courseDetail.vendor_Name}</h2>
                                        <p>{this.state.courseDetail.detail}</p>

                                        {/* <Row>
                                        {coursesArray.map((c, index) => (

                                            <Col sm={6} lg={4} xl={3} key={c.vendorId}>
                                                {c && (
                                                    <Course
                                                        key={index}
                                                        id={c.vendorId}
                                                        name={c.vendor_Name}
                                                        img={c.vendor_ImageLink}
                                                        cssclass={c.cssclass}
                                                        detail={c.detail}
                                                        sort={c.sort}

                                                    />
                                                )}
                                            </Col>
                                        ))}
                                    </Row> */}
                                    </div>

                                </>
                        }
                    </Container>
                </section>


                {/* {
                    this.state.showLoader ?
                        <>
                            <div className='d-flex align-items-center justify-content-center' style={{ height: '250px', }}>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        </>
                        :
                        <> */}

                            <Certificates id={this.state.id} courseName={this.state.courseDetail} />
                        {/* </>
                } */}


                {/* <AvailableExams /> */}

                <Discovers />


                {/* <div className="course-box" key={this.props.id}>
                    <Link to={`/${this.props.id}`}>
                        <div className="course-thumbnail">
                            <Image className='w-100' src={'./assets/images/courses/' + cimg[0] + '.jpg'}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "./assets/images/courses/course-thumbnail.jpg";
                                }}
                            />
                        </div>
                        {
                            this.props.name ?
                                <>
                                    <div className="course-title">{this.props.name}</div>
                                </>
                                :
                                ''
                        }
                    </Link>
                </div> */}

            </>
        )
    }
}

export default CourseDetail