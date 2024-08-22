import './Home.scss';
import React from 'react'
// import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async';

// Bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../Footer/Footer';
import Courses from '../Courses/Courses';
import Uploads from '../Uploads/Uploads';
import Blogs from '../Blogs/Blogs';
import Discovers from '../Discovers/Discovers';
import ContactUs from '../ContactUs/ContactUs';


function Home() {
    return (
        <>
            {/* <Helmet>
                <title>URDUITACADEMY</title>
            </Helmet> */}
            <section className="section section-aboutus">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="welcome-video">
                                <Image src={'./assets/images/welcome-img.svg'} className="w-100" />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="welcome-content">
                                <h1 className='title'>Welcome to UITA</h1>
                                {/* <h2 className='title'>Welcome to UITA</h2> */}
                                <h2 className='subtitle'>We are on a mission to provide free education</h2>
                                <p className='description'>40+ Beginner to master level courses. <br />
                                    50K+ Students are learning new skills everyday to become IT Professionals and Experts.</p>
                                <Button as="a" href="#" className='btn btn-link'>
                                    <span>See all courses </span>
                                    <span className="icon"><img src={'assets/images/arrow-right.svg'} /></span>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Courses />


            <section className="section section-gradient py-3">
                <Container>
                    <Col>
                        <div className="gradient-box">
                            UITA is supported by ads, please disable your adblocker to continue supporting UITA
                        </div>
                    </Col>
                </Container>
            </section>

            <Uploads />

            <Blogs />
            

            <Discovers />


            <Testimonials />

        </>
    )
}

// Home.propTypes = {}

export default Home
