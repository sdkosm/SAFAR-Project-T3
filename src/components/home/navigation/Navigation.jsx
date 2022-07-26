import React, { Component } from "react";
import "./Navigation.css";
// import Safar from "./assets/12345.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faHouse, faLocationDot, faMagnifyingGlass, faPhone, faUser, } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export default class Navigation extends Component {
  render() {
    return (
      <div className="homeNav">
        <nav className="navbar">
          <div className="logoimg">
          <img className="logo" src="./images/12345.png" alt="logo" />
          </div>
          {/* ......................logo........ */}
          {/* ...........Home, Train Status, PNR Check, Support, Sign In/ Sign Up...... */}

          <div className="navbtn">
            <div className="btn">
              <Link className="brand" to="/" style={{ textDecoration: "none" }}>
                <FontAwesomeIcon icon={faHouse} />
                &nbsp;
                Home
              </Link>
            </div>

            <div className="btn">
              <a
                className="brand"
                href="https://enquiry.indianrail.gov.in/mntes/"
                role="button"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLocationDot} />
                &nbsp; Train Status
              </a>
            </div>

            <div className="btn">
              <a
                className="brand"
                href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en"
                role="button"
                target="_blank"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                &nbsp; PNR Check
              </a>
            </div>
          </div> 

          <div className="name">SAFAR</div>
          

          <div className="aboutbtn">
            <Link className="navbar-brand" to="/Aboutus">
              <a className="userbtn" href="" role="button">
                <FontAwesomeIcon icon={faCircleInfo} />
                &nbsp;
              </a>
              About Us
            </Link>
          </div>

          <div className="supportbtn">
            <Link className="navbar-brand" to="/Support">
              <a className="userbtn" href="" role="button">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;
              </a>
              Support
            </Link>
          </div>

          <div className="logbtn">
            <div className="dropdown">
              <button className="navbar-brand" ><FontAwesomeIcon icon={faUser} />
                  &nbsp;Login/SignUp</button>
              <div className="dropdown-content">
                {/* <a href="SignIn">As User</a> */}
                <Link to="SignIn">As User</Link>
                <Link to="adminSignIn">As Admin</Link>
                {/* <a href="adminSignIn">As Admin</a> */}
              </div>
            </div>

          </div>
        </nav>
      </div>
    );
  };
};