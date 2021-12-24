import React, { Component } from 'react';
import SerStyle from "./Ser_style";

class Backend extends Component {
    render() {
        return (
            <div>
            <SerStyle />
            <div className="container">
              <div className="row">

                <div className="col-12" style={design}>
                  <h3 style={color} className="text-center">
                    Back-End Roadmaps
                  </h3>
                </div>
    
                <div className="step-1 col-12">
                  <div className="row">
                    <h4 className="step-title text-center">Back-End Roadmaps</h4>
    
                    <div className="col-11 col-lg-5 mx-3 my-2 bg-white">
                      <div className="row">
                        <div className="col-12">
                          <p className="foot-heading" style={text}>
                            Fullstack
                          </p>
                        </div>
                        <div className="foot-content col-12" style={bgcolor}>
                          <p>SQL</p>
                          <p>PHP</p>
                          <p>ASP</p>
                          <p>Python</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-11 col-lg-6 mx-3 my-2 bg-white">
                      <div className="row">
                        <div className="col-12">
                          <p className="foot-heading" style={text}>
                            Fullstack Js
                          </p>
                        </div>
                        <div className="foot-content col-12" style={bgcolor}>
                          <p>SQL</p>
                          <p>Node.js</p>
                          <p>MySQL</p>
                          <p>Mongo.db</p>
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

export default Backend;