import "./footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component }  from "react";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import Privacy from "./privacy/Privacy";

export default class Footer extends Component {
  render(){

  return (
    <div className="footer">
      <div className="h1">
        <div className="head">SAFAR</div>

        <div className="reserve">©2022 Safar | All Rights Reserved</div>

        <div className="privacy">
          <u>
          <Link className="fprivacy" to="/Terms">
          <b>Terms of Use</b>
          </Link></u> &nbsp;| &nbsp;<u><Link className="fprivacy" to="/privacy">
          <b> Privacy Policy </b>
          </Link></u>
        </div>
      </div>

      <div className="h2">
        <div className="follow">
           <u><b>Follow us On</b></u>
        </div>

        <div className="social">
          <a
            className="facebook"
            href="https://allmylinks.com/deepaklodha"
            target="_blank"
            role="button"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <span> </span>
          <a
            className="twitter"
            href="https://twitter.com/anshul266261"
            target="_blank"
            role="button"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>

          <a
            className="github"
            href="https://github.com/Manasgupta840"
            target="_blank"
            role="button"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/vaishnavi-namdev-b08520204/"
            target="_blank"
            role="button"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      <div className="h3">
        <div className="design">
          <FontAwesomeIcon icon={faLaptopCode} />
          <u>
            Design & Developed By <b>MVAD</b>
          </u>
        </div>
      </div>

    </div>
  );
};
}