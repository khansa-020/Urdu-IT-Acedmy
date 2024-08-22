// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

//Bootstrap
import { Container, Breadcrumb } from 'react-bootstrap';


export class LicenceAggrement extends Component {
    static propTypes = {}

    render() {
        return (

            <>
                <main>
                    {/* <Header /> */}

                    <section className="section inner-page">
                        <Container className="">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    Licence aggrement
                                </Breadcrumb.Item>
                            </Breadcrumb>

                            <div className='mb-4 mb-md-5'>
                                <h2 className="title page-title">License Agreement with Urdu IT Academy</h2>
                                
                                <p>Urdu IT Academy does not authorise any one to share URDU IT academy CBT or Products for any Commercial use either on any internet sites apart from our authorised partner running channel named UrduITAcademy, under proper Adsense publisher ID (which can be furbished on demand), However everyone is allowed to use it and distribute it without commercial purpose/ gain. </p>
                                    {/* <br><br> */}
                                <p>UrduITAcademy has the explicit permission to use the UrduITAcademy.com content commercially. </p>
                                    {/* <br><br> */}
                                    <p>Apart from UrduITAcademy no one have the right to use the contents for commercial use in anyway The authorised YouTube video channel is having commercial rights is UrduITAcademy who is YouTube partner. All URDU IT Academy CBT video are made with proper consideration of the following laws and Guideline.</p>
                                    
                                    <p>
                                        Copyright Law <br />
                                        Youtube community guideline
                                    </p>
                                    <p>Link to our Authorised YouTube channel is
                                        <a href="https://www.youtube.com/@uita" target="_blank">https://www.youtube.com/@uita</a><br/>
                                    <br />
                                    Opinions expressed on this website or Videos are the personal opinions of the Trainer, not of URDUITACADEMY. 
                                    The content is provided for educational or informational purposes only and is not meant to be an endorsement of any product. 
                                    Visitors may post reviews, comments, photos and other content, on our discussion form, Facebook page and youtube channel,
                                     so long as the content is not illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual
                                      property rights, or other injurious to third parties. User may not use a false email address, impersonate any person or 
                                      entity. <br/>
                                    <br />
                                    If you have any question regarding the copyright and authorization of the computer training material, send an email to our admin operation centre at <a href="#">admin@urduitacademy.com</a>
                                    </p>
                            </div>

                        </Container>
                    </section>
                    {/* <Footer /> */}
                </main>
            </>
        )
    }
}

export default LicenceAggrement