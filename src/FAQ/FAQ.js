// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './FAQ.scss'
import globalVar from '../globalVar';

//Bootstrap
import { Container, Breadcrumb } from 'react-bootstrap';


export class FAQ extends Component {
    static propTypes = {}
    constructor() {
        super();
        this.state = {
            data: null,
            isLoading: false,
            error: null,
            lastFetchTime: null
        };
    }

    componentDidMount() {
        const cachedData = localStorage.getItem('cachedData');
        if (cachedData) {
            const { data, lastFetchTime } = JSON.parse(cachedData);
            this.setState({ data, lastFetchTime });
        }
        // Fetch data only if it hasn't been fetched before or if it's older than 5 minutes
        if (!this.state.data || this.isDataStale()) {
            this.fetchData();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        // Prevent unnecessary re-renders if the component's state hasn't changed
        return this.state.data !== nextState.data ||
            this.state.isLoading !== nextState.isLoading ||
            this.state.error !== nextState.error;
    }

    isDataStale() {
        // Check if the data is older than 5 minutes
        const currentTime = new Date();
        return (currentTime - new Date(this.state.lastFetchTime)) / 1000 > 300;
    }

    fetchData = async () => {
        // Set loading state
        this.setState({ isLoading: true });

        try {
            // Make API call
            const response = await fetch(globalVar.url + 'faq');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Parse JSON response
            const responseData = await response.json();

            // Update component state with fetched data and last fetch time
            this.setState({
                data: responseData.data,
                isLoading: false,
                lastFetchTime: new Date(),
                error: null
            });

            // Store fetched data in localStorage
            localStorage.setItem('cachedData', JSON.stringify({
                data: responseData,
                lastFetchTime: new Date()
            }));
        } catch (error) {
            // Handle errors
            this.setState({
                isLoading: false,
                error: error.message
            });
        }
    };

    render() {
        const { data, isLoading, error } = this.state;

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (

            <>
                <main>
                    {/* <Header /> */}

                    <section className="section inner-page">
                        <Container className="">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>FAQ's</Breadcrumb.Item>
                            </Breadcrumb>

                            <div className='mb-4 mb-md-5'>
                                {/* <h1 className="title page-title">Help</h1> */}
                                <h1 className="title page-title">FAQ's</h1>

                                {/* <h2 className="subtitle">Useful Links</h2> */}

                                <div className="faq-wrapper mt-3">
                                    {data && (
                                        <div>
                                            {data.map((item, index) => (
                                                <div className="faq-item" key={index} id={item.id}>
                                                    <div className="faq-title">{item.question}</div>
                                                    <div className="faq-body">{item.answer}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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

export default FAQ