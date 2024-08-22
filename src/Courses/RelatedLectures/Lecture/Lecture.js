import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';


export class Exam extends React.Component {
    static propTypes = {}
    render() {
        const { customCourse = 'World' } = this.props;
        // const cimg = this.props.img.split('.');
        // const cimg = 'aaaa';
        return (
            <>
                <div className="course-box" key={this.props.examId}>
                    <Link to={`/exam/${this.props.examId}`}>
                        <div className="course-thumbnail">
                            {/* <Image className='w-100' src={'/assets/images/courses/course-thumbnail.jpg'} alt="exam" /> */}
                            <Image className='w-100' src={'/assets/images/courses/coumbnail.jpg'} alt="exam thumbnail"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "/assets/images/courses/course-thumbnail.jpg";
                                }}
                            />
                        </div>
                        {
                            this.props.exam_Name ?
                                <>
                                    <div className="course-title">{this.props.exam_Name}</div>
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

export default Exam