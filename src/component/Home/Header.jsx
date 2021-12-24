import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// menu bar icon 
import { FaInbox,FaDelicious,FaSign,FaLock,FaTools,FaPhabricator,FaSearch } from "react-icons/fa";
import Header from "./Style/Header";
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <div className="hed-ing">
          <Header />
     {/*------------------- top nvbar -------------------------*/}
      <div className="top-nav-bar">
        <div className="search-box" style={{paddingLeft:"2%", paddingTop:15}}>
            <input type="text" className="form-control" />
            <span className="input-group-text"><FaSearch className="fontawesome fa-search" /></span>
        </div>

        <div className="menu-bar">
            <ul>
                <li>
                  <Link to="/" className="nav-link"><FaInbox className="fontawesome" /><br />Home</Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link"><FaDelicious className="fontawesome"/><br />AboutUs</Link>
                </li>
                <li>
                  <Link to="/services" className="nav-link"><FaTools className="fontawesome" /><br />Services</Link>
                </li>

                <li>
                    <Link to="/technology" className="nav-link"><FaPhabricator className="fontawesome" /><br />Technology</Link>
                </li>

                <li>
                    <Link to="/signup" className="nav-link"><FaSign className="fontawesome" /><br />SignUp</Link>
                </li>

                <li>
                    <Link to="/login" className="nav-link"><FaLock className="fontawesome" /><br />LogIn</Link>
                </li>
            </ul>
        </div>

    </div>
      </div>
    );
  }
}