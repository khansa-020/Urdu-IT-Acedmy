import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Certificate from './Certificate/Certificate';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import globalVar from '../../globalVar';

export class Certificates extends Component {
    static propTypes = {}
    constructor(props) {
        super();
        this.state = {
            certificatesArray: [],
            courseId: window.location.pathname.split("/").pop(),
            vendorId: props.id,
            // courseId: 7,
        };

        // console.log("api", this.state.certificatesArray )
        
    }
    
    componentDidMount() {
        const { id } = this.props;
        const { courseName } = this.props.courseName;
        console.log( "courseName K", this.props.courseName)
        this.loadAvailableExams(id);
    }

    loadAvailableExams(vendorId) {
        const { page } = this.state;
        // console.log( "this.state", this.state)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ vendorId: vendorId })
        };
        // Fetching data from FaceBook Jest Repo
        fetch( globalVar.url + 'certificates', requestOptions )
            .then(res => res.json())
            .then(response => {
                // console.log("RRRRRRRRR", response.data)
                // const filteredCertificate = response.data.filter(e => {
                //     return e.certificationId == this.state.vendorId
                // });
                this.setState(
                    { certificatesArray: response.data },
                    () => console.log("Certificates", this.state.certificatesArray)
                );
            }
            )
            .catch(error => console.log(error));
    }


    render() {
        const { certificatesArray } = this.state;

        
        // const { id } = this.props;
        // console.log("this.props.id", id )

        return (
            <>

                {
                    certificatesArray.length > 0 ?
                        <>
                            <section className="section section-courses inner-page">
                                <Container>
                                    {/* <h2 className="title mb-4">Available exam courses</h2> */}
                                    <Row>

                                        {certificatesArray.map((e, index) => (

                                            <Col sm={6} lg={4} xl={3} key={e.certificationId}>
                                                {e && (
                                                    <Certificate
                                                        key={index}
                                                        vendorId={e.vendorId}
                                                        certificationId={e.certificationId}
                                                        certification_Name={e.certification_Name}
                                                        status={e.status}
                                                        detail={e.detail}
                                                        instructor_id={e.instructor_id}

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

export default Certificates