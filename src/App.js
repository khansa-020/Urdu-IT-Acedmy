import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Header from './Header/Header';

// import { Button } from 'react-bootstrap';
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './HomePage/Home';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import CoursesPage from './CoursesPage/CoursesPage';
import Courses from './Courses/Courses';
import LicenceAggrement from './LicenceAggrement/LicenceAggrement';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import CourseDetail from './Courses/CourseDetail/CourseDetail';
import CertificateDetail from './Courses/CertificateDetail/CertificateDetail';
import LectureDetail from './Courses/LectureDetail/LectureDetail';

import { HelmetProvider } from 'react-helmet-async';
import BlogDetail from './Blogs/BlogDetail/BlogDetail';
import { BlogsPage } from './BlogsPage/BlogsPage';
import HelpPage from './HelpPage/HelpPage';
import FAQ from './FAQ/FAQ';


function App() {

    
    // const [students, setStudents] = useState([]);
    
    // useEffect(()=>{
    //     async function getAllStudents() {
    //         try{
    //             const students = await axios.get("http://110.39.6.107:8080/urdui_api/api/team");
    
    //             console.log("API", students.data);
    //             setStudents(students.data)
    //         } catch (error) {
    //             console.log("error HAI", error);
    //         }
    //     }
    //     getAllStudents();
    // }, [])

    return (
        <div className="App">
            <HelmetProvider>
                {/* Your application components */}
                {/* <YourComponent /> */}
                <Header />
                
                <Router>
                    {/* <Layout> */}
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/courses" element={<CoursesPage />} />
                            <Route exact path='/blogs' element={<BlogsPage />} />
                            <Route exact path='/blogpost/:blogpostId' element={<BlogDetail />} />
                            <Route exact path='/course/:courseId' element={<CourseDetail />} />
                            <Route exact path='/course/:courseId/certificate/:certificateId' element={<CertificateDetail />} />
                            {/* <Route exact path='/certificate/:certificateId' element={<CertificateDetail />} /> */}
                            <Route exact path='/lecture/:lectureId' element={<LectureDetail />} />
                            <Route exact path="/aboutus" element={<AboutUs />} />
                            <Route exact path="/contactus" element={<ContactUs />} />
                            <Route exact path="/licence-aggrement" element={<LicenceAggrement />} />
                            <Route exact path="/help" element={<HelpPage />} />
                            <Route exact path="/faq" element={<FAQ />} />
                            <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    {/* </Layout> */}
                </Router>
                <Footer />
            </HelmetProvider>
        </div>
    );





    // const [students, setStudents] = useState([]);
    //
    // useEffect(()=>{
    //     async function getAllStudents() {
    //         try{
    //             const students = await axios.get("http://localhost:8000/api/students");
    //
    //             console.log("API", students.data);
    //             setStudents(students.data)
    //         } catch (error) {
    //             console.log("error HAI", error);
    //         }
    //     }
    //     getAllStudents();
    // }, [])

    // {
    //     students.map((student, i)=>{
    //         return <h2 key={i}>{student.std_name} - {student.std_email}</h2>
    //     })
    // }

}

export default App;
