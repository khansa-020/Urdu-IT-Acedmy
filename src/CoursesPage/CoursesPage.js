import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Container, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';

import globalVar from '../globalVar';

import Course from '../Courses/Course/Course';
import Discovers from '../Discovers/Discovers';

export class CoursesPage extends Component {
    // static propTypes = {}
    constructor() {
        super();
        this.state = {
            coursesArray: [],
        };

        // this.loadCourses();
        // console.log("api", this.state.coursesArray )
    }

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses() {
        const { page } = this.state;
        // Fetching data from FaceBook Jest Repo
        fetch(globalVar.url + 'courses_library',
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/vnd.github.cloak-preview"
                })
            }
        )
            .then(res => res.json())
            .then(response => 
                this.setState({ coursesArray: response.data })
            )
            .catch(error => console.log(error));
    }

    render() {

        const { coursesArray } = this.state;
        return (
            <>
            
                <section className="section section-courses inner-page">
                    
                    <Container>
                    
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Courses</Breadcrumb.Item>
                        </Breadcrumb>
                    
                        <h2 className="title page-title">Our Courses Library</h2>
                        <p>Explore our library of all the available course topics. Each course topic contain related courses within it. 
                            Choose your interest and explore all the available courses inside that library.</p>
                        

                            <Row>
                            {coursesArray.map((c, index) => (
                                
                                <Col sm={6} lg={4} xl={3}  key={c.vendorId}>
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
                        </Row>
                    </Container>
                </section>

                <Discovers />
            </>
        )
    }
}

export default CoursesPage