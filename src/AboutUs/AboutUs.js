// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

//Bootstrap
import { Breadcrumb, Container, Row, Col, Image, Button } from 'react-bootstrap';
import OurTeam from '../OurTeam/OurTeam';


export class AboutUs extends Component {
    static propTypes = {}

    render() {
        return (

            <>
                <main>
                    {/* <Header /> */}

                    <section className="section inner-page">
                        <Container className="">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    About
                                </Breadcrumb.Item>
                            </Breadcrumb>

                            <div className='mb-4'>
                                <h2 className="title page-title">About Us</h2>
                            </div>

                            <Row>
                                <Col lg={6} className="d-flex flex-wrap align-items-center mt-4 mt-lg-0 order-2 order-lg-1">
                                    <div className="welcome-content"> 
                                        <p className='description'>Urdu IT Academy is an e-learning website. It’s time for students to take command of their learning without using a classroom. 
                                        Internet is a source that is convinenient and easy to accessible. UITA gives an increadible opportunity to students who wants to polish their skills in Technology. 
                                        At UITA we help people from all over the world enabling them to learn and earn living from what they love.</p>

                                        <p className='mb-3'><em>“ At Urdu IT Academy we seek to empower people. By providing high quality computer based training, we believe that we are enabling people to further educate themselves with our free online computer based training series ”</em></p>
                                        <p>Kashif Iqbal | Founder</p>
                                    </div>
                                </Col>
                                <Col lg={6} className=' order-1 order-lg-2'>
                                    <div className="welcome-video">
                                        {/* <Image src={'./assets/images/aboutus.svg'} className="w-100" /> */}
                                        <Image src={'./assets/images/welcome-img.svg'} className="w-100" />
                                    </div>
                                </Col>
                            </Row>

                            <div>
                                <OurTeam />
                            </div>

                        </Container>
                    </section>
                    {/* <Footer /> */}
                </main>
            </>
        )
    }
}

export default AboutUs