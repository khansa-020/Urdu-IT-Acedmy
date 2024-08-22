import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


export class Certificate extends React.Component {
    static propTypes = {}
    render() {
        const { customCourse = 'World' } = this.props;
        // const cimg = this.props.img.split('.');
        // const cimg = 'aaaa';
        return (
            <>
                <div className="course-box" key={this.props.certificationId}>
                    <Link to={`/certificate/${this.props.certificationId}`}>
                        <div className="course-thumbnail">
                            {/* <Image className='w-100' src={'/assets/images/courses/course-thumbnail.jpg'} alt="exam" /> */}
                            <Image className='w-100' src={'/assets/images/courses/coumbnail.jpg'} alt="certificate thumbnail"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "/assets/images/courses/course-thumbnail.jpg";
                                }}
                            />
                        </div>
                        {
                            this.props.certification_Name ?
                                <>
                                    <div className="course-title">{this.props.certification_Name}</div>
                                </>
                                :
                                ''
                        }
                    </Link>
                </div>

            </>
        )
    }
}

export default Certificate