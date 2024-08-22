import './Testimonials.scss';
import PropTypes from 'prop-types'
import React, { Component } from 'react'

// Bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

import globalVar from '../globalVar';

export class Testimonials extends Component {
    static propTypes = {}

    constructor() {
        super();
        this.state = {
            customerReviews: [],
            // id: window.location.pathname.split("/").pop(),
            showLoader: true
        };
        // this.loadCourses(this.state.id);
    }

    componentDidMount() {
        this.loadReviews();
    }

    loadReviews() {

        fetch(globalVar.url + 'customer_reviews', {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then(response => response.json())
            .then(
                response => {
                    this.setState({ customerReviews: response.data }
                        // , () => console.log("customerReviews", this.state.customerReviews)
                    );
                    this.state.showLoader = false;
                }
            )
            .catch(error => console.log(error));

        // console.log('customerReviews', this.state.customerReviews)
    }

    render() {
        const { customerReviews } = this.state;
        return (

            <section className="section section-testimonials">
                <Container>
                    <Col md={12}>
                        <div className="testimonials">
                            <Carousel>

                                {customerReviews.map((c, index) => (

                                    <Carousel.Item key={index} id={c.id}>
                                        {c && index < 4 && (
                                            <>
                                                <p>{ c.customer_remarks }</p>
                                                <h3>{ c.customer_name }</h3>
                                            </>
                                        )}
                                    </Carousel.Item>
                                ))}
                                {/* <Carousel.Item>
                                    <p>I started “UrduITAcademy” lectures in 2013 and I left my actual
                                        field of Accounting in 2014 and started Networks. Now due to passion
                                        and UrduITAcademy’s great lectures, I am working as a Network and Security
                                        Engineer in a well renowned Solution Provider of Pakistan with 2xCCIE,
                                        and many more. I appreciate the great efforts made by UrduITAcademy for
                                        students who can’t afford expensive trainings and courses. May ALLAH Bless
                                        The UrduITAcademy team with great blessings and happiness. Ameen.</p>
                                    <h3>ASSSADASD </h3>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <p>I started “UrduITAcademy” lectures in 2013 and I left my actual
                                        field of Accounting in 2014 and started Networks. Now due to passion
                                        and UrduITAcademy’s great lectures, I am working as a Network and Security
                                        Engineer in a well renowned Solution Provider of Pakistan with 2xCCIE,
                                        and many more. I appreciate the great efforts made by UrduITAcademy for
                                        students who can’t afford expensive trainings and courses. May ALLAH Bless
                                        The UrduITAcademy team with great blessings and happiness. Ameen.</p>
                                    <h3>Talha Nisar</h3>
                                </Carousel.Item> */}
                            </Carousel>
                        </div>
                    </Col>
                </Container>
            </section>
        )
    }
}

export default Testimonials