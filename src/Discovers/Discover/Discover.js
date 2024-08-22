import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Container, Row, Col, Image, Button } from 'react-bootstrap';
export class Discover extends React.Component {
    static propTypes = {}

    // static propTypes = {}
    constructor() {
        super();
        this.state = {
            coursesArray: [],
        };

        // console.log("api", this.state.coursesArray )
    }

    componentDidMount() {
        // this.loadCourses();
    }

    loadCourses() {
        const { page } = this.state;
        // Fetching data from FaceBook Jest Repo
        fetch(
            `http://110.39.6.107:8080/urdui_api/api/courses_details`,
            {
                method: "POST",
                headers: new Headers({
                    Accept: "application/vnd.github.cloak-preview"
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                    console.log("ALI POST", response)
                    // this.setState({ coursesArray: response.data })
                }
            )
            .catch(error => console.log(error));
    }
    render() {
        const { customCourse = 'World' } = this.props;
        return (
            <>
                <div className="discover-box">
                    <div className="discover-thumbnail">
                        <Image className='w-100' src={'./assets/images/discover-1.svg'} />
                    </div>
                    <div className="discover-content">
                        <div className="subtitle">CCNA</div>
                        <div className="title">Test your knowledge, play the quiz</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Discover