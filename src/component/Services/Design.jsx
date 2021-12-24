import React, { Component } from "react";
import Library from "../image/design/WebDesignBooks.JPG";
import Html from './image/design/html.png';
import Css from './image/design/css.png';
import Js from './image/design/javascript.png';
import SerStyle from './Ser_style';

class Design extends Component {
  render() {
    return (
      <>
      <SerStyle />
        <div className="container">
          <div className="row">
            <div className="col-12" style={design}>
                <h2 style={color}>Web Design</h2>
              <p>
                Web design encompasses many different skills and disciplines in
                the production and maintenance of websites. The different areas
                of web design include web graphic design; user interface design
                (UI design); authoring, including standardised code and
                proprietary software; user experience design (UX design); and
                search engine optimization. Often many individuals will work in
                teams covering different aspects of the design process, although
                some designers will cover them all.[1] The term "web design" is
                normally used to describe the design process relating to the
                front-end (client side) design of a website including writing
                markup. Web design partially overlaps web engineering in the
                broader scope of web development. Web designers are expected to
                have an awareness of usability and if their role involves
                creating markup then they are also expected to be up to date
                with web accessibility guidelines.
              </p>
            </div>

            <div className="col-12">
              <div className="row justify-content-between">
                <h2 style={color}>History</h2>
                <div className="col-12 col-lg-6">
                  <ul>
                    <li>
                      Although web design has a fairly recent history. It can be
                      linked to other areas such as graphic design, user
                      experience, and multimedia arts, but is more aptly seen
                      from a technological standpoint. It has become a large
                      part of people's everyday lives. It is hard to imagine the
                      Internet without animated graphics, different styles of
                      typography, background, videos and music.
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4">
                  <img src={Library} alt="not found" className="w-100"/>
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="row">
                <h2 style={color}>Skills</h2>
                <div className="d-flex col-12 col-lg-4">
                  <img src={Html} alt="not found" className="img-skils" />
                </div>
                <div className="d-flex col-12 col-lg-4">
                  <img src={Css} alt="not found" className="img-skils" />
                </div>
                <div className="d-flex col-12 col-lg-4">
                  <img src={Js} alt="not found" className="img-skils" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
}
const design={
    marginTop:"30px",
    padding: "0 15px"
}
const color={
    color:"#fba62f"
}

export default Design;
