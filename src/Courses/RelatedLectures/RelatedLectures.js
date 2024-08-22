import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Lecture from './Lecture/Lecture';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export class AvailableExams extends Component {
    // static propTypes = {}
    constructor() {
        super();
        this.state = {
            examsArray: [],
            courseId: window.location.pathname.split("/").pop(),
            // courseId: 7,
        };

        // console.log("api", this.state.examsArray )
    }

    componentDidMount() {
        this.loadAvailableExams();
    }

    loadAvailableExams() {
        const { page } = this.state;
        // Fetching data from FaceBook Jest Repo
        fetch(
            `http://110.39.6.107:8080/urdui_api/api/available_exam`,
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/vnd.github.cloak-preview"
                })
            }
        )
            .then(res => res.json())
            .then(response => {

                const filteredExams = response.data.filter(e => {
                    return e.certificationId == this.state.courseId
                });
                this.setState(
                    { examsArray: filteredExams },
                    () => console.log("Available Exams", this.state.examsArray)
                );
            }
            )
            .catch(error => console.log(error));
    }


    render() {
        const { examsArray } = this.state;

        return (
            <>

                {
                    examsArray.length > 0 ?
                        <>
                            <section className="section section-courses inner-page">
                                <Container>
                                    <h2 className="title mb-4">Available exam courses</h2>
                                    <Row>

                                        {examsArray.map((e, index) => (

                                            <Col sm={6} lg={4} xl={3} key={e.examId}>
                                                {e && (
                                                    <Lecture    
                                                        key={index}
                                                        examId={e.examId}
                                                        certificationId={e.certificationId}
                                                        exam_Name={e.exam_Name}
                                                        status={e.status}

                                                    />
                                                )}
                                            </Col>
                                        ))}
                                    </Row>

                                </Container>
                            </section>
                        </>
                        : ''
                }
            </>
        )
    }
}

export default AvailableExams