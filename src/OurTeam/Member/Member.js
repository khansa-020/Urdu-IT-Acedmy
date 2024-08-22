import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
export class Course extends React.Component {
    static propTypes = {}
    render() {
        const { customCourse = 'World' } = this.props;
        return (
            <>
            <div className="course-box team-member" key={ this.props.id }
                 onClick={() => this.props.instructorModalClick()}
                >
                {/* <Link to={"courses/" + this.props.id}> */}
                    <div className="course-thumbnail">
                        <Image className='w-100' src={'https://www.urduitacademy.com/team/'+this.props.img+''}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src="./assets/images/courses/course-thumbnail.jpg";
                            }}
                        />
                    </div>
                    {
                        this.props.name ?
                        <>
                        <div className="course-title d-flex justify-content-between">
                            <span>{this.props.name}</span>
                            {
                                this.props.sequance === 1 ?
                                <>
                                    <span><span className='ratio-1' style={{fontWeight: 'normal',fontSize: '80%'}}>1:1</span></span>
                                </>
                                : ''
                            }
                        </div>
                        </>
                        :
                        ''
                    }
                    {
                        this.props.work ?
                        <>
                        <div className="designation">{this.props.work}</div>
                        </>
                        :
                        ''
                    }
                {/* </Link> */}
            </div>
                
            </>
        )
    }
}

export default Course