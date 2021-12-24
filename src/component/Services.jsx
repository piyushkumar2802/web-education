import React, { Component } from "react";
import { FaCentos,FaUserCog,FaMobileAlt,FaDesktop,FaAccusoft,FaUserFriends } from "react-icons/fa";
import ServiceStyle from "./style/Services_style";

class Services extends Component {
  render() {
    return (
      <>
        <ServiceStyle />
        <div className="main-services">
          <h1 className="main-services-heading">
            <strong>
              Software{" "}
              <span className="main-services-devlopment">Devlopment</span>
              <br /> Services
            </strong>
          </h1>
          <p className="main-services-p">
            <strong>
              Custom software development services to advance your business
            </strong>
            <br />
            We offer integrated digital transformation services including
            technology consulting,
            <br /> product engineering, to cloud consulting - and empower your
            business with powerful digital experience.
          </p>
        </div>
        <div className="container">
          <h2 className="sub-h2 font-weight-bold text-heading mb-3">
            Services
          </h2>
          <div className="row px-3 py-3">
            <div className="service-content col-md-4 col-lg mb-lg-0 mx-1">
              Web <br className="d-none d-lg-block" />
              Development
            </div>
            <div className="service-content col-md-4 col-lg mb-lg-0 mx-1">
              Software <br className="d-none d-lg-block" />
              Development
            </div>
            <div className="service-content col-md-4 col-lg mb-lg-0 mx-1">
              Web <br className="d-none d-lg-block" />
              Design
            </div>
            <div className="service-content col-md-4 col-lg mb-lg-0 mx-1">
              Mobile App <br className="d-none d-lg-block" />
              Development
            </div>
            <div className="service-content col-md-4 col-lg mb-lg-0 mx-1">
              Support &amp; <br className="d-none d-lg-block" />
              Maintenance
            </div>
            <div className="service-content col-md-4 col-lg mb-lg-0 mx-1">
              Team <br className="d-none d-lg-block" />
              Augmentation
            </div>
          </div>
        </div>

        <div className="row mx-4 my-4">

          <div className="col-md-6 px-1 mb-2">
            <div className="inner-wraper px-1 px-lg-4 py-5">
              <div className="row">
                <div className="col-2 text-center">
                  <FaDesktop className="services-icon" />
                </div>
                <div className="col-10">
                  <h3 className="service-team-title mb-2">
                    Web Development
                  </h3>
                  <p className="services-team-font">
                    Meeting your project deadline with variety of website
                    building services, from cearting beautiful website, and
                    corporate web portal solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 px-1 mb-2">
            <div className="inner-wraper px-3 px-lg-4 py-5">
              <div className="row">
                <div className="col-2 text-center">
                  <FaAccusoft className="services-icon" />
                </div>
                <div className="col-10">
                  <h3 className="service-team-title mb-2">
                    Software Development
                  </h3>
                  <p className="services-team-font">
                    Serving start-ups to enterprises at designing, engineering,
                    &amp; supporting various software services that consist of
                    planning to implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 px-1 mb-2">
            <div className="inner-wraper px-3 px-lg-4 py-5">
              <div className="row">
                <div className="col-2 text-center">
                  <FaMobileAlt className="services-icon" />
                </div>
                <div className="col-10">
                  <h3 className="service-team-title mb-2">
                    Mobile App Development
                  </h3>
                  <p className="services-team-font">
                    Offering impactful mobile app development services to build
                    stuffing mobile apps, that converge all mobile platforms
                    with latest technology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 px-1 mb-2">
            <div className="inner-wraper px-3 px-lg-4 py-5">
              <div className="row">
                <div className="col-2 text-center">
                  <FaUserCog className="services-icon" />
                </div>
                <div className="col-10">
                  <h3 className="service-team-title mb-2">
                    Support &amp; Maintenance
                  </h3>
                  <p className="services-team-font">
                    Maintaining your software by contriving technical support
                    boarding with app delivery, deployment, enhancement, and
                    maintenance services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 px-1 mb-2">
            <div className="inner-wraper px-3 px-lg-4 py-5">
              <div className="row">
                <div className="col-2 text-center">
                  <FaCentos className="services-icon" />
                </div>
                <div className="col-10">
                  <h3 className="service-team-title mb-2">
                    Web Design
                  </h3>
                  <p className="services-team-font">
                    Provid you with a web design services that’s
                    perfect for your business digital transformation with
                    innovative.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 px-1 mb-2">
            <div className="inner-wraper px-3 px-lg-4 py-5">
              <div className="row">
                <div className="col-2 text-center">
                  <title>team</title>
                  <FaUserFriends className="services-icon" /> 
                </div>
                <div className="col-10">
                  <h3 className="service-team-title mb-2 font-20">
                    Team Augmentation
                  </h3>
                  <p className="services-team-font pr-lg-3">
                    full stack developers and all required IT staffs
                    for software outsourcing, that will fill skill gap at your
                    own team.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
        
      </>
    );
  }
}

export default Services;
