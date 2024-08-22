import { Link } from "react-router-dom";


import './Header.scss';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

import { Helmet } from 'react-helmet-async';

function Header() {
    // const logo = './assets/images/logo.svg'; 
    return (
        <>
            {/* <Helmet>
                <title>URDUITACADEMY</title>
            </Helmet> */}
            <div className="header">
                <Navbar expand="lg" className='nav-menu'>
                    <Container>
                        <Navbar.Brand href="/">
                            <Image src={'./assets/images/logo.svg'} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/" className='active'>Home</Nav.Link>
                                <Nav.Link href="/courses">Courses</Nav.Link>
                                <Nav.Link href="/quizes">Quiz</Nav.Link>
                                <Nav.Link href="/contactus">About</Nav.Link>
                                <Nav.Link href="/help">Help</Nav.Link>
                                <Nav.Link href="/blogs">Blog</Nav.Link>
                            </Nav>
                            <Form className="d-flex menu-search">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className=""
                                    aria-label="Search"
                                />
                                {/* <Button variant="outline-success">
                                <Image className='icon' src={'./assets/images/search-icon.svg'} />
                            </Button> */}
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );

}

export default Header;
