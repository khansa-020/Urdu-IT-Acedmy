import './Footer.scss';
// import PropTypes from 'prop-types';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col md={2} sm={3} >
              <h4>About</h4>
              <ul>
                <li><a href="">Our Mission</a></li>
                <li><a href="">Our Team</a></li>
                <li><a href="">Our Partners</a></li>
              </ul>
            </Col>
            <Col md={2} sm={3} >
              <h4>Courses</h4>
              <ul>
                <li>
                  <a href="">New Courses</a>
                </li>
                <li>
                  <a href="">Course achive</a>
                </li>
              </ul>
            </Col>
            <Col md={2} sm={3} >
              <h4>Help & Support</h4>
              <ul>
                <li>
                  <a href="/licence-aggrement">License aggrement</a>
                </li>
                <li>
                  <a href="">FAQ</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </Col>
            <Col md={2} sm={3} >
              <h4>Contribute</h4>
              <ul>
                <li>
                  <a href="">Volunteer</a>
                </li>
                <li>
                  <a href="">Donate</a>
                </li>
              </ul>
            </Col>
            <Col md={4} sm={12}>
              <h4>Follow Us</h4>
              {/* <ul>
                <a href="" ></a>
              </ul> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <p>2022 © Urdu IT Academy | All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}

export default Footer