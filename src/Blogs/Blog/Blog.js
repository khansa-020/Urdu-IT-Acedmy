import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Container, Row, Col, Image, Button, Breadcrumb } from 'react-bootstrap';

import { Link } from "react-router-dom";

export class Blog extends React.Component {
    static propTypes = {}
    render() {
        const { id, img, name } = this.props;
        return (
            <>
                <div className="course-box" key={id}>
                    <Link to={`/blogpost/${id}`}>

                        <div className='course-thumbnail'>
                            <Image className='w-100' src={img}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "./assets/images/upload-1.svg";
                                }} />
                        </div>
                        <div className="course-title">{name}</div>
                    </Link>
                </div>

                {/* <Col md={3} 
                >
                    <div className="course-box">
                        <Image className='w-100' src={'./assets/images/course-1.svg'} />
                        <div>Blog Name</div>
                    </div>
                </Col> */}
            </>
        )
    }
}

export default Blog