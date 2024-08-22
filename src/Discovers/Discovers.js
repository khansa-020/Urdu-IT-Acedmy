// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

// Bootstrap
import { Container, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';
import Discover from './Discover/Discover';


export class Discovers extends Component {
    static propTypes = {}

    render() {
        return (

            <>

                <section className="section section-discover">

                    <Container>
                        <h2 className="title mb-4">Discover more</h2>
                        <Row>
                            <Col md={4}>
                                <Discover />
                            </Col>
                            <Col md={4}>
                                <Discover />
                            </Col>
                            <Col md={4}>
                                <Discover />
                            </Col>
                            {/* <Col md={4}>
                                <Discover />
                            </Col> */}
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Discovers