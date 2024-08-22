import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import CourseDetail from '../CourseDetail/CourseDetail';

export class Course extends React.Component {
    static propTypes = {}
    render() {
        const { customCourse = 'World' } = this.props;
        const cimg = this.props.img.split('.');
        return (
            <>
                <div className="course-box" key={this.props.id}>
                    <Link to={`/course/${this.props.id}`}>
                        <div className="course-thumbnail">
                            <Image className='w-100' src={'./assets/images/courses/' + cimg[0] + '.jpg'}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "./assets/images/courses/course-thumbnail.jpg";
                                }}
                            />
                        </div>
                        {
                            this.props.name ?
                                <>
                                    <div className="course-title">{this.props.name}</div>
                                </>
                                :
                                ''
                        }
                    </Link>

{/*                     
                    <Routes>
                        <Route exact path='/courseaa/:courseId' element={<CourseDetail id={this.props.id} />} /> 
                    </Routes> */}
                </div>

            </>
        )
    }
}

// const Post = () => {
//     const params = useParams();
//     return <div style={{ padding: 30 }}>
//       <h1>ID: {params.id}</h1>
//       <h2>Slug: {params.slug}</h2>
//     </div>
//   }

export default Course