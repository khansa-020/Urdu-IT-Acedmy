import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Col } from 'react-bootstrap'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export class NotFound extends Component {
  static propTypes = {}

  render() {
    return (
      <>
        <Container >
          <Col>
            <h2 className="text-center py-5">Page NOT FOUND :{'('}</h2>
          </Col>
        </Container>
      </>
    )
  }
}

export default NotFound