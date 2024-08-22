// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './HelpPage.scss'
import globalVar from '../globalVar';

//Bootstrap
import { Container, Breadcrumb } from 'react-bootstrap';


export class HelpPage extends Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {
            linksArray: [],
            uniqueVendors: {},
            newArray: [],
        };

        // this.loadCourses();
        // console.log("api", this.state.linksArray )
    }

    componentDidMount() {
        this.loadHelpData();
    }

    loadHelpData() {
        const { page } = this.state;
        // Fetching data from FaceBook Jest Repo
        fetch(globalVar.url + 'help',
            {
                method: "GET",
                headers: new Headers({
                    Accept: "application/vnd.github.cloak-preview"
                })
            }
        )
            .then(res => res.json())
            .then(response => {

                // Extract vendorId and vendor_Name from each object
                const vendors = response.data.map(item => ({
                    vendorId: item.vendorId,
                    vendor_Name: item.vendor_Name
                }));

                // Remove duplicate entries
                const uniqueVendors = vendors.filter((vendor, index, self) =>
                    index === self.findIndex(v => (
                        v.vendorId === vendor.vendorId && v.vendor_Name === vendor.vendor_Name
                    ))
                );



                // Filter data for each unique vendor
                const dataForUniqueVendors = uniqueVendors.map(vendor => ({
                    vendorId: vendor.vendorId,
                    vendor_Name: vendor.vendor_Name,
                    data: response.data.filter(item => item.vendorId === vendor.vendorId)
                }));
                


                // console.log("all vendors",vendors);

                // this.setState({ linksArray: response.data }, () => { })
                this.setState({ linksArray: dataForUniqueVendors }, () => { }, () => { })
                // console.log("Help ", this.state.linksArray);
                console.log("newArray", this.state.linksArray);
                // console.log("dataForUniqueVendors", dataForUniqueVendors);
        
            })
            .catch(error => console.log(error));
    }


    render() {
        // const { linkItems } = this.state;
        // console.log("???", this.state.linksArray)

        return (

            <>
                <main>
                    {/* <Header /> */}

                    <section className="section inner-page">
                        <Container className="">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>Help</Breadcrumb.Item>
                            </Breadcrumb>

                            <div className='mb-4 mb-md-5'>
                                {/* <h1 className="title page-title">Help</h1> */}
                                <h1 className="title page-title">Useful Links</h1>

                                {/* <h2 className="subtitle">Useful Links</h2> */}

                                <div className="mt-3">

                                    <div className="useful-links">
                                        {this.state.linksArray.map((item, index) => (
                                            <div className="" key={index} id={item.vendorId}>
                                                <div>
                                                    <h3>{item.vendor_Name}</h3>

                                                    <div className="links-wrapper">
                                                        {item.data.map((link, index) => (
                                                            <div className="" key={index} id={link.linkId}>
                                                                <a href={link.link_address}>{link.link_description}</a>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {/* {this.state.linksArray.map((linkItem, index) => (
                                            <div className="" key={index} id={linkItem.linkId}>
                                                <div>
                                                    <h3><a href={linkItem.link_address}>{linkItem.vendor_Name}</a></h3>
                                                    <div>{linkItem.link_description}</div>
                                                </div>
                                            </div>
                                        ))} */}
                                    </div>

                                </div>
                            </div>

                        </Container>
                    </section>
                    {/* <Footer /> */}
                </main>
            </>
        )
    }
}

export default HelpPage