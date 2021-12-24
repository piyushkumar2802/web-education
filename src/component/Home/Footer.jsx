import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from "./Style/Footer-s";
import logo from "./image/logo.png";
import {Link} from 'react-router-dom';
import {FaLinkedin, FaTwitter, FaFacebook, FaWhatsapp, FaArrowRight} from 'react-icons/fa';

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                < Style />

                {/* -- ======= Footer ======= -- */}
                <footer className="footer">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row gy-4">

                            <div className="col-lg-12 col-md-12 footer-info">
                                    <a href="/" className="logo d-flex align-items-center">
                                        <img src={logo} alt="" />
                                        <span>WebEdu</span>
                                    </a>
                            </div>

                                <div className="col-lg-5 col-6 footer-links text-start">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/">Home</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/about">About</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/services">Services</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/technology">Technology</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/privacy">Privacy Policy</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3 col-6 footer-links text-start">
                                    <h4>Our Services</h4>
                                    <ul >
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/web-design">Web Design</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/front-end">Front-end</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/back-end">Back-End</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/fullstack-devloper">full stack</Link></li>
                                        <li><FaArrowRight className="footer-icon" /> <Link to="/logout">Logout</Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-4 col-md-12 footer-contact text-center">
                                    <h4>Contact Us</h4>
                                    <p>
                                        A-22A Bharat Nagar <br />
                                        Sachidanand Nagar 462023<br />
                                        Bhopal <br /><br />
                                        <strong>Phone:</strong> +91 9905532741<br />
                                        <strong>Email:</strong> rkc2802@gmail.com<br />
                                    </p>
                                </div>

                                    <div className="social-links mt-1 col-md-12 text-center">
                                        <a href="/" className="twitter"> <FaTwitter className="footer-icon-media" /></a>
                                        <a href="/" className="facebook"> <FaFacebook className="footer-icon-media" /></a>
                                        <a href="/" className="instagram"> <FaLinkedin className="footer-icon-media" /></a>
                                        <a href="/" className="linkedin"> <FaWhatsapp className="footer-icon-media" /></a>
                                    </div>

                            </div>
                        </div>
                    </div>

                    <div className="footer-top">
                        <div className="container">
                            <div className="row gy-4">
                                <div className="container">
                                    <div className="copyright">
                                        &copy; Copyright <strong><span>WebEdu</span></strong>. All Rights Reserved
                                    </div>
                                    <div className="credits">
                                        Designed by <span className="creater">Piyush kumar</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
           {/* -- End Footer -- */}
            </Fragment>
        )
    }
}
