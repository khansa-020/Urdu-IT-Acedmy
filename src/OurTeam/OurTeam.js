import './OurTeam.scss';

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";

import Member from './Member/Member';
import { Container, Row, Col, Image, Modal, Button } from 'react-bootstrap';

import globalVar from '../globalVar';


export class OurTeam extends Component {
    // static propTypes = {}
    constructor() {
        super();
        this.state = {
            OurTeamArray: [],
            modalShow: false,
            teamMemberDetail: {}
        };

        // console.log("here", this.state.OurTeamArray);
    }

    componentDidMount() {
        this.loadCourses();
    }

    loadCourses() {
        const { page } = this.state;
        // Fetching data from FaceBook Jest Repo
        fetch(globalVar.url + 'team',
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/vnd.github.cloak-preview"
                })
            }
        )
            .then(res => res.json())
            .then(response => {
                this.setState({ OurTeamArray: response.data })
                // console.log("SAAASA", response.data);
            }
            )
            .catch(error => console.log(error));

    }

    instructorModal = (id) => {
        // console.log("click from child component", id)

        const filteredMember = this.state.OurTeamArray.find(keyMember => {
            return keyMember.id === id;
        });
        this.setState(
            { teamMemberDetail: filteredMember },
            // () => console.log("Modal Data", this.state.teamMemberDetail)
        );
        // console.log( "asdasdasdasdasdads", filteredMember)
        // console.log( "teamMemberDetail", this.state.teamMemberDetail)
        this.setState({ modalShow: !(this.state.modalShow) });
    };

    hideInstructorModal = () => {
        this.setState({ modalShow: !(this.state.modalShow) });
    };

    toggleInstructorModal = () => {
        this.setState({ modalShow: !(this.state.modalShow) });
    };

    render() {
        const { OurTeamArray } = this.state;
        let { modalShow } = this.state;

        return (
            <>

                <section className="section section-courses section-ourTeam">
                    <Container>
                        <h2 className="title mb-4">Meet Our Team</h2>

                        <div className='mb-5'>
                            <p>Meet the amazing team behind the UITA and its courses. Our instructors are working professionals in their respective fields and they not only bring the hands on knowledge in their courses. You can now also book a One on One consulting session with our instructors.</p>
                            <ol className='ps-3'>
                                <li>Check the availability by looking at this <span className='ratio-1'>1:1</span> icon next to instructor name.</li>
                                <li>Click on the instructor name and click on Book 1:1 Session.</li>
                                <li>You will be taken to the booking page.</li>
                                <li>Confirmation will be sent to you over your email. </li>
                            </ol>
                        </div>


                        <Row>
                            {OurTeamArray.map((m, index) => (

                                <Col sm={6} lg={4} xl={3} key={m.id}>
                                    {m && (
                                        <Member
                                            key={index}
                                            id={m.id}
                                            name={m.name}
                                            img={m.pic}
                                            work={m.work}
                                            detail={m.detail}
                                            sequance={m.sequance}
                                            instructorModalClick={() => this.instructorModal(m.id)}
                                        />
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>

                <Modal
                    className='instructorPopup'
                    show={modalShow}
                    onHide={() => this.hideInstructorModal()}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='thumbnail'>
                            <Image className='rounded-circle' src={'https://www.urduitacademy.com/team/' + this.state.teamMemberDetail.pic + ''}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src = "./assets/images/courses/course-thumbnail.jpg";
                                }}
                            />
                        </div>
                        <h4 className='name'>{this.state.teamMemberDetail.name}</h4>
                        <div className='price'>Book a 1:1 session at 1000INR/hr</div>
                        <div className='desc'>
                            <p>{this.state.teamMemberDetail.detail}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='justify-content-start'>
                        {/* <Button onClick={() => this.toggleInstructorModal()}>Close</Button> */}
                        <Button onClick={() => this.toggleInstructorModal()}>Book 1on1 session</Button>
                    </Modal.Footer>
                </Modal>


            </>
        )
    }
}

export default OurTeam




