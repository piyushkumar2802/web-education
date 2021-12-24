import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import WorkStyle from './Style/Work--style';
import {Link} from 'react-router-dom';
class work extends Component {
  render() {
    return (
      <div>
        < WorkStyle />
        <div className="work-main">
          <div className="sec-a work-child">
            <h2>
              Web
              <br />
              Devlopment
            </h2><hr />
            <p>
              Go mobile with our mobile experts! Our mobile app development
              company covers major technolo...
            </p>
            <Button variant="primary" className="btn-work"><Link to="/web-devlopment" style={White}>More</Link></Button>
          </div>

          <div className="sec-b work-child">
            <h2>
              Web
              <br />
              Design
            </h2><hr />
            <p>
              We are a trusted web design & development company that delivers
              feature-packed, secure & scalable...
            </p>
            <Button variant="primary" className="btn-work"><Link to="/web-design" style={White}>More</Link></Button>
          </div>

          <div className="sec-c work-child">
            <h2 className="work-text-right">
              Product
              <br />
              Management
            </h2><hr />
            <p>
              Build and manage a dedicated team with qualified resources working
              exclusively for your project.
            </p>
            <Button variant="primary" className="btn-work"><Link to="/product-management" style={White}>More</Link></Button>
          </div>

          <div className="sec-d work-child">
            <h2 className="work-text-right">
              Graphic
              <br />
               Design
            </h2><hr />
            <p>
              Let our experts manage your mobile & web application development,
              so that you can focus on running...
            </p>
            <Button variant="primary" className="btn-work"><Link to="/graphic-design" style={White}>More</Link></Button>
          </div>

          <div className="sec-e work-child">
            <h2 className="work-text-center">
              Full Stack
              <br />
              Decloper
            </h2><hr />
            <p>
              Let our experts manage your mobile & web application development,
              so that you can focus on running...
            </p>
            <Button variant="primary" className="btn-work"><Link to="/fullstack-devloper" style={White}>More</Link></Button>
          </div>
        </div>
      </div>
    );
  }
}
const White={
  color:"#ccc",
  textDecoration:"none"
}

export default work;
