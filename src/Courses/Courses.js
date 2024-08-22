import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Course from './Course/Course';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import globalVar from '../globalVar';


export class Courses extends Component {
    // static propTypes = {}
    constructor() {
        super();
        this.state = {
            coursesArray: [],
        };

        console.log("api", globalVar.url + 'courses_library' )
        // console.log("api", this.state.coursesArray )
        
        // this.loadCourses();
    }

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses() {
        const { page } = this.state;
        // Fetching data from FaceBook Jest Repo
        fetch( globalVar.url + 'courses_library',
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
            
                <section className="section section-courses">
                    <Container>
                        <h2 className="title mb-4">Our Courses</h2>
                        <Row>
                            {coursesArray.map((c, index) => (
                                
                                <Col sm={6} lg={4} xl={3}  key={c.vendorId}>
                                {c && index < 4 && (
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
                        <Col md={12} className="text-center">
                            {/* <Link to={"courses/" + this.props.id}> */}
                                <Button as="a" href="/courses" className='btn btn-link'>
                                    <span>See all courses </span>
                                    <span className="icon"><img src={'assets/images/arrow-right.svg'} /></span>
                                </Button>
                            {/* </Link> */}
                        </Col>
                    </Container>
                </section>
            </>
        )
    }
}

export default Courses