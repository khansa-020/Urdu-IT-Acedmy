import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Container, Row, Breadcrumb, Spinner, Col, Image, Button } from 'react-bootstrap';
import Discovers from '../../Discovers/Discovers';
import AvailableExams from '../AvailableExams/AvailableExams';

export class LectureDetail extends React.Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {
            lectureDetail: [],
            id: window.location.pathname.split("/").pop(),
            showLoader: true
        };
    }

    componentDidMount() {
        this.loadCourses(this.state.id);
    }

    loadCourses(id) {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        };
        fetch("http://110.39.6.107:8080/urdui_api/api/lectures", requestOptions)
            .then(response => response.json())
            .then(
                response => {
                    
                    const filteredLectures = response.data.filter(e => {
                        return e.examId == this.state.id
                    });
                    this.setState( { lectureDetail: filteredLectures} 
                        , () => console.log("Modal Data",this.state.lectureDetail)
                        );
                    this.state.showLoader = false;
                }
            )
            .catch(error => console.log(error));
    }

    render() {
        // const { lectureDetail } = this.state.lectureDetail;
        // const cimg = this.props.img.split('.');
        return (
            <>

                <section className="section section-courses inner-page">

                    <Container>

                        {
                            this.state.showLoader ?
                            <>
                                <div className='d-flex align-items-center justify-content-center' style={{height: '250px',}}>
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </Spinner>
                                </div>
                            </>   
                            : 
                            <>
                                    
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="/courses">Courses</Breadcrumb.Item>
                                    <Breadcrumb.Item active>{this.state.lectureDetail.vendor_Name}</Breadcrumb.Item>
                                </Breadcrumb>

                                <div className='mb-4'>

                                    {/* <h2 className="title page-title">{this.state.lectureDetail.vendor_Name}</h2>
                                    <p>{this.state.lectureDetail.detail}</p> */}

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


                {/* <AvailableExams /> */}
                                
                <Discovers />

            </>
        )
    }
}

export default LectureDetail