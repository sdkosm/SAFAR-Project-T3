import React, { Component, useState } from "react";
// import React, { useState } from 'react';
import { Card } from "react-bootstrap";
import visitImage from "../../assets/dk2.jpg";
import Footer from "../footer/Footer";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "./destinationslide/Slide";
import Rule from "./rule/Rule";
import Faq from "./faq/Faq";
import Navigation from "./navigation/Navigation";
import Marquees from "./marguees/Marquees";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* .........................Navbar............................ */}
        
        <Navigation/>
        
        {/* ............................Navbar End....................... */}

        {/* ..................Text Sliding-Marquees............................... */}

        <Marquees/>
        
        {/* ........................Text Sliding End.................... */}

        <div className="Images">
          <Card.Img src={visitImage} alt="Card image" />
          <h4><div className="centered">SAFAR Ticket Booking</div></h4>
        </div>
        {/* ........................General Middle Text End.................. */}
        {/* ....................Top Destination for Travelling...................... */}

        <Slide />
        {/* ....................Top Destination for Travelling End...................... */}

        {/* .........................General Rule for Train Booking..................... */}
        <Rule />

        {/* .....................................FAQ.................................. */}

        <Faq />
        {/* .................................Footer.................................. */}

        <Footer />

      </div>
    );
  }
}
