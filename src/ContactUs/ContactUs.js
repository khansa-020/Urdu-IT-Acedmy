// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

//Bootstrap
import { Container, Breadcrumb } from 'react-bootstrap';


export class ContactUs extends Component {
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
                                    ContactUs
                                </Breadcrumb.Item>
                            </Breadcrumb>

                            <div className='mb-4 mb-md-5'>
                                <h2 className="title page-title">Contact Us</h2>
                                <p>We love to hear from you, we welcome your feedback and contribution to Urdu IT Academy.
                                    Please find the resources on this page to contact us.</p>
                            </div>

                            <div className='mb-4 mb-md-5'>
                                <h3 className='sub-title d-flex align-items-center'>
                                    <span className="d-inline-flex h-100 me-2 mt-1">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 7H28V24C28 24.2652 27.8946 24.5196 27.7071 24.7071C27.5196 24.8946 27.2652 25 27 25H5C4.73478 25 4.48043 24.8946 4.29289 24.7071C4.10536 24.5196 4 24.2652 4 24V7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M28 7L16 18L4 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className='d-inline-flex'>Email</span>
                                </h3>
                                <p>Due to high Volume of emails, we try our level best to reply within 48-72 hours, Monday through Friday <br />
                                    <Link className='fw-bold' to='#' onClick={(e) => { window.location = 'mailto:admin@urduitacademy.com'; e.preventDefault(); }}>admin@urduitacademy.com</Link></p>
                                <p>Please note this email address of for suggestion, Volunteer work and feedback only , If you have any technical question please post it on Facebook page or Urdu IT Discussion forum on our webpage.</p>
                            </div>

                            <div className='mb-4 mb-md-5'>
                                <h3 className='sub-title d-flex align-items-center'>
                                    <span className="d-inline-flex h-100 me-2 mt-1">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                                            <path d="M18.1252 18.125L21.6377 10.35L13.8752 13.875L10.7002 21.3L18.1252 18.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className='d-inline-flex'>Free Career Advice</span>
                                </h3>
                                <p>Are you looking for a job? Planning a career change? Or just wanting to learn something new? Most great things begin with a plan. Your career should be no different. A plan will give you something to work towards. It'll also help you make the most of the opportunities that come your </p>
                                <p>Free Career advice for everyone , If you have any question related to your career / new start-up business / Interviewing please feel free to send us an email on the address below.</p>
                                <p>Please mention your full name location and questions you have in detailed and brief email, so we can guide you properly.<br />
                                    <Link className='fw-bold' to='#' onClick={(e) => { window.location = 'mailto:careeradvice@urduitacademy.com'; e.preventDefault(); }}>careeradvice@urduitacademy.com</Link></p>
                            </div>

                            <div className='mb-4 mb-md-5'>
                                <h3 className='sub-title d-flex align-items-center'>
                                    <span className="d-inline-flex h-100 me-2 mt-1">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="black" stroke-width="2" stroke-miterlimit="10" />
                                            <path d="M18.1252 18.125L21.6377 10.35L13.8752 13.875L10.7002 21.3L18.1252 18.125Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className='d-inline-flex'>Volunteer</span>
                                </h3>
                                <p>For volunteer work and help to record and develop more advanced series , just drop email with subject title of Volunteer.<br />
                                    <Link className='fw-bold' to='#' onClick={(e) => { window.location = 'mailto:admin@urduitacademy.com'; e.preventDefault(); }}>Email at admin@urduitacademy.com</Link>
                                    </p>
                            </div>

                            <div className='mb-4 mb-md-5'>
                                <h3 className='sub-title d-flex align-items-center'>
                                    <span className="d-inline-flex h-100 me-2 mt-1">
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 28H7C6.73478 28 6.48043 27.8946 6.29289 27.7071C6.10536 27.5196 6 27.2652 6 27V9C6 8.73478 6.10536 8.48043 6.29289 8.29289C6.48043 8.10536 6.73478 8 7 8H17L22 13V27C22 27.2652 21.8946 27.5196 21.7071 27.7071C21.5196 27.8946 21.2652 28 21 28Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10 8V5C10 4.73478 10.1054 4.48043 10.2929 4.29289C10.4804 4.10536 10.7348 4 11 4H21L26 9V23C26 23.2652 25.8946 23.5196 25.7071 23.7071C25.5196 23.8946 25.2652 24 25 24H22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 19H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11 23H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <span className='d-inline-flex'>CV Review</span>
                                </h3>
                                <p>We'll work with you to create the perfect CV to help you secure your dream role. Just drop email with attach CV and subject title of CV Review.<br />
                                    <Link className='fw-bold' to='#' onClick={(e) => { window.location = 'mailto:review@urduitacademy.com'; e.preventDefault(); }}>Email at review@urduitacademy.com</Link></p>
                            </div>

                        </Container>
                    </section>
                    {/* <Footer /> */}
                </main>
            </>
        )
    }
}

export default ContactUs