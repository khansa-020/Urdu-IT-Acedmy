import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CertificateDetail.scss'
import { Link } from "react-router-dom";
import { Container, Row, Breadcrumb, Spinner, Col, Image, Button } from 'react-bootstrap';
import Discovers from '../../Discovers/Discovers';
import AvailableExams from '../AvailableExams/AvailableExams';
import Certificates from '../Certificates/Certificates';
import globalVar from '../../globalVar';

export class CertificateDetail extends React.Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {
            courseDetail: [],
            certificationDetail: [],
            id: window.location.pathname.split("/").pop(),
            c_url: window.location.href,
            showLoader: true
        };

        console.log( "ALAI", this.state.c_url )
    }

    componentDidMount() {
        this.loadCourses(this.state.id);
    }

    loadCourses(id) {
        const filterId = parseInt(id, 10);

        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ vendorId: 1 })
        };
        // Fetching data from FaceBook Jest Repo
        fetch( globalVar.url + 'certificates', requestOptions )
            .then(res => res.json())
            .then(response => {
                console.log("RRRRRRRRR", response.data)
                // const filteredCertificate = response.data.filter(e => {
                //     return e.certificationId == this.state.vendorId
                // });
                this.setState(
                    { certificatesArray: response.data },
                    () => console.log("Certificates TRY", this.state.certificatesArray)
                );
            }
            )
            .catch(error => console.log(error));

        // console.log("id", id)
        // const requestOptions = {
        //     method: "GET",
        //     headers: new Headers({
        //         Accept: "application/vnd.github.cloak-preview"
        //     })
        // };
        // const requestOptions00 = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ certificationId: filterId })
        // };

        // fetch(globalVar.url + "certificates", requestOptions00)
        //     .then(response => response.json())
        //     .then(
        //         response => {
        //             console.log( response.data )
        //             // const filteredCertificate = response.data.filter(e => {
        //             //     // return e.certificationId == filterId
        //             //     return e.certificationId == filterId
        //             // });
        //             // console.log("filteredCertificate", filteredCertificate)
        //             // this.setState(
        //             //     { certificationDetail: filteredCertificate },
        //             //     () => console.log("Certificate name/desc", this.state.certificationDetail)
        //             // );

        //             this.state.showLoader = false;
        //         }
        //     )
        //     .catch(error => console.log(error));


        fetch(globalVar.url + "courses", {
            method: "POST",
            headers: new Headers({
                Accept: "application/vnd.github.cloak-preview"
            })
        })
            .then(response => response.json())
            .then(
                response => {

                    // const filteredCourse = response.data.filter(e => {
                    //     return e.vendorId == this.state.id
                    // });
                    const filteredCourses = response.data.filter(course => course.vendorId === filterId);


                    // const filteredCourse = response.data.filter(e => {
                    //     return e.vendorId === id; // Use strict equality (===)
                    // });
                    // console.log( "id",id )    
                    // console.log( "R",response.data )    
                    // console.log( "F",filteredCourses )    
                    // this.setState({ courseDetail: filteredCourses });
                    this.setState(
                        { courseDetail: filteredCourses[0] },
                        // () => console.log("Course name", this.state.courseDetail)
                    );
                    // console.log("Course name", this.state.courseDetail)
    
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
                                        <Breadcrumb.Item href="/courses">Courses</Breadcrumb.Item>
                                        {/* <Breadcrumb.Item href={'/course/' + this.state.courseDetail.vendorId}>{this.state.courseDetail.vendor_Name}</Breadcrumb.Item> */}
                                        {/* <Breadcrumb.Item active>{this.state.certificationDetail.certification_Name}</Breadcrumb.Item> */}
                                    </Breadcrumb>

                                    <div className='mb-4'>

                                        <h2 className="title page-title d-flex align-items-center">
                                            {/* <span>{this.state.certificationDetail.certification_Name}</span> */}
                                            <span className='d-inline-flex ms-3'>
                                                <span className='certificateStatus-tag'>Completed</span>
                                            </span>
                                        </h2>
                                        {/* <p>{this.state.certificationDetail.detail}</p> */}
                                    </div>
                                </>
                        }
                    </Container>
                </section>

                {/* <AvailableExams certificationId={this.state.certificationDetail.certificationId} /> */}
                {/* <AvailableExams /> */}

                <Discovers />

            </>
        )
    }
}

export default CertificateDetail