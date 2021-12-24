import React, { Component } from "react";
import SerStyle from "./Ser_style";

class Frontend extends Component {
  render() {
    return (
      <div>
        <SerStyle />
        <div className="container">
          <div className="row">
            <div className="col-12" style={design}>
              <h3 style={color} className="text-center">
                Front-End Roadmap
              </h3>
            </div>

            <div className="step-1 col-12">
              <div className="row">
                <h4 className="step-title text-center">STEP 1</h4>
                <h4 className="step-title text-center">Learn the Basics</h4>
                <div className="step-1-content col-11">
                  <ul>
                    <li>
                      Every Web Developer must have a basic understanding of
                      HTML, CSS, and JavaScript.
                    </li>
                    <li>
                      Responsive Web Design is used in all types of modern web
                      development.
                    </li>
                    <li>
                      ECMAScript 5 (JavaScript 5) is supported in all modern
                      browsers. Take a good look at it, especially the new array
                      functions.
                    </li>
                  </ul>
                </div>
                <div className="col-11 col-lg-4 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        HTML
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>HTML</p>
                      <p>HTTP/XHR</p>
                    </div>
                  </div>
                </div>
                <div className="col-11 col-lg-3 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        CSS
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>CSS</p>
                      <p>CSS Responsive</p>
                    </div>
                  </div>
                </div>
                <div className="col-11 col-lg-4 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        JavaScript
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>JavaScript</p>
                      <p>ECMAScript5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-1 col-12">
              <div className="row">
                <h4 className="step-title text-center">STEP 2</h4>
                <h4 className="step-title text-center">Dig Deeper</h4>
                <div className="step-1-content col-11">
                  <ul>
                    <li>
                      When you feel comfortable with HTML and CSS, it is time to
                      dig deeper.
                    </li>
                    <li>
                      You should learn how to use Maps, Fonts and Icons in HTML.
                    </li>
                    <li>
                      On the JavaScript side, you should learn how to access the
                      HTML DOM.
                    </li>
                    <li>
                      You should also learn how to use AJAX and JSON for making
                      server requests.
                    </li>
                  </ul>
                </div>
                <div className="col-11 col-lg-4 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        HTML
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>HTML DOM</p>
                      <p>Google Maps</p>
                      <p>Google Fonts</p>
                      <p>Google Google Charts</p>
                    </div>
                  </div>
                </div>
                <div className="col-11 col-lg-3 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        CSS
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>CSS Icons</p>
                    </div>
                  </div>
                </div>
                <div className="col-11 col-lg-4 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        JavaScript
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>XML</p>
                      <p>JSON</p>
                      <p>AJAX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="step-1 col-12">
              <div className="row">
                <h4 className="step-title text-center">STEP 3</h4>
                <h4 className="step-title text-center">Choose Frameworks</h4>
                <div className="step-1-content col-11">
                  <ul>
                    <li>Now it is time to look at some Frameworks.</li>
                    <li>
                      On the CSS side you should choose a framework for
                      reponsive web design: Bootstrap / Material Design /
                      W3.CSS.
                    </li>
                    <li>
                      On the JavaScript side you should learn at least one
                      modern framework: React.js / Angular.js / Vue.js / W3.JS
                    </li>
                    <li>
                      Maybe the popularity of jQuery has passed the top, but it
                      is still the most used JavaScript framework.
                    </li>
                  </ul>
                </div>
                <div className="col-11 col-lg-4 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        XML
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>XSLT</p>
                      <p>XPath</p>
                      <p>XQuery</p>
                    </div>
                  </div>
                </div>
                <div className="col-11 col-lg-3 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        CSS
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>Bootstrap</p>
                      <p>W3.CSS</p>
                    </div>
                  </div>
                </div>
                <div className="col-11 col-lg-4 mx-2 my-2 bg-white">
                  <div className="row">
                    <div className="col-12">
                      <p className="foot-heading" style={text}>
                        JavaScript
                      </p>
                    </div>
                    <div className="foot-content col-12" style={bgcolor}>
                      <p>JQuery</p>
                      <p>Angular JS</p>
                      <p>Vue.js</p>
                      <p>W3.js</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
const design = {
  marginTop: "30px",
  padding: "0 15px",
};
const color = {
  color: "#fba62f",
};
const bgcolor = {
  background: "#fba62f",
};
const text = {
  color: "#607d8b",
};

export default Frontend;
