import React, { Component } from "react";
import Img1 from "./image/about-1.gif";
import Img2 from "./image/about-2.gif";
import AboutStyle from "./style/about_style";

class About extends Component {
  render() {
    return (
      <>
        <AboutStyle />
        <div className="container">
          <div className="row main-about">
            <div className="col-lg-6 col-mb-12 px-2">
              <h1 className="about-heading">Welcome to Web Education </h1>
              <p>
                UpGrad KnowledgeHut Launches Outcome-based Skilling Courses.
              </p>
            </div>
            <div className="col-lg-6 col-mb-12 px-2">
              <img src={Img1} alt="" className="w-100" />
            </div>
            <div className="col-lg-6 col-mb-12 px-2">
              <img src={Img2} alt="" className="img-radius w-100" />
            </div>
            <div className="col-lg-6 col-mb-12 px-2">
              <div className="about-head">
                <p>
                  teaches skills needed to design, develop, implement, maintain,
                  support or operate a particular technology or related
                  application, product or service.
                </p>
                <ul>
                  <li>
                    Meeting the Needs of the Modern Technical Workforce Using
                    Blended Learning.
                  </li>
                  <li>
                    How to Turn Highly Technical Content Into an Engaging
                    Learner Experience.
                  </li>
                  <li>How to Train Employees on a New Software Rollout.</li>
                </ul>
              </div>
            </div>
            <div className="about-templatecol-12">
              <p>
                Website templates are quick and easy solution that can help you
                to launch a website. ... Create any kind of website, whether it
                is corporate, personal portfolio, creative agency, startup
                business, digital studio or any other business that needs a
                creative and easy to use website.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
