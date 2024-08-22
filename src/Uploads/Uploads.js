import PropTypes from 'prop-types'
import React, { Component } from 'react'

// Bootstrap
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

export class Uploads extends Component {
    // static propTypes = {}

    render() {
        return (
            <>

                <section className="section section-uploads">

                    <Container>
                        <h2 className="title mb-4">New Uploads</h2>
                        <Row>
                            <Col md={3}>
                                <div className="upload-box">
                                    <Image className='w-100' src={'./assets/images/upload-1.svg'} />
                                    <div className="upload-content">
                                        <div className="subtitle">CCNA</div>
                                        <div className="title">Introduction to ICND 1</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="upload-box">
                                    <Image className='w-100' src={'./assets/images/upload-1.svg'} />
                                    <div className="upload-content">
                                        <div className="subtitle">CCNA</div>
                                        <div className="title">Introduction to ICND 1</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="upload-box">
                                    <Image className='w-100' src={'./assets/images/upload-1.svg'} />
                                    <div className="upload-content">
                                        <div className="subtitle">CCNA</div>
                                        <div className="title">Introduction to ICND 1</div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="upload-box">
                                    <Image className='w-100' src={'./assets/images/upload-1.svg'} />
                                    <div className="upload-content">
                                        <div className="subtitle">CCNA</div>
                                        <div className="title">Introduction to ICND 1</div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Uploads