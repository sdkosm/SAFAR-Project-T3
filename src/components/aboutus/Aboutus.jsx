import React, { Component } from "react";
import "./Aboutus.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Navigation from "../home/navigation";


export default class Aboutus extends Component {
  render() {
    return (
      
      <div>

      <div className="content">
        <div className="teaminfo">
          <section className="mt-5">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-12">
                  <h1 className="text-center mt-4 text-secondary">Our Team</h1>
                </div>
              </div>

              <div class="row">
                <div class="col-sm-3">
                  <img
                    className="mt-4"
                    src="https://media-exp1.licdn.com/dms/image/D4E03AQFOPd4OULGePA/profile-displayphoto-shrink_800_800/0/1646982593815?e=1664409600&v=beta&t=jCa3JPzImI0UBpx3T-tWBuKErQ3rC4anRjcdxbBR3Ao"
                    style={{ width: "100%" }}
                  />
                  {/* <img class="mt-4 " src="./images/team3.jpg" style="width:100%"> */}
                  <h4 class="text-dark mt-2">MANAS GUPTA</h4>
                  <p class="text-muted">BTech-CE (MITS Gwalior)</p>
                  <p>
                    I like solving logical questions and I have done some
                    adventures in my life, Actually I am always curious how to
                    do things differently.
                    <p>Connect Me:✨</p>
                    <p class="link-secondary">
                      <a href="https://www.facebook.com/profile.php?id=100011637976786">
                        <FontAwesomeIcon icon={faFacebook} target="_blank"/> &nbsp;
                      </a>
                      <a href="https://www.instagram.com/__manas__gupta__/?hl=en">
                        <FontAwesomeIcon icon={faInstagram} target="_blank"/> &nbsp;
                      </a>
                      <a href="https://www.linkedin.com/in/manas-gupta-313576179/">
                        <FontAwesomeIcon icon={faLinkedin} target="_blank"/> &nbsp;
                      </a>
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faYoutube} /> &nbsp;
                      </a> */}
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                      </a>
                      <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faDiscord} /> &nbsp;
                      </a>
                      <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faCoffee} /> &nbsp;
                      </a>
                      <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faGithub} /> &nbsp;
                      </a> */}
                    </p>
                  </p>
                </div>

                <div class="col-sm-3">
                  <img
                    className="mt-4"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQG1sFLjIcf3lQ/profile-displayphoto-shrink_800_800/0/1658723377742?e=1664409600&v=beta&t=SGJP3KTyNJJfCgrZ3Crwx1MAInMZf1xF5Bwdy26NARU"
                    style={{ width: "100%" }}
                    alt="foo"
                  />
                  {/* <img class="mt-4 " src="./images/team2.jpg" style="width:100%"> */}
                  <h4 class="text-dark mt-2">VAISHNAVI NAMDEV</h4>
                  <p class="text-muted">MCA - Uni. of Hyderabad</p>
                  <p>
                    I am learning new tech like React Js and have ambitious to
                    work as a Full Stack Developer. I like photography and
                    Travelling.
                    <p>Connect Me:✨</p>
                    <p class="link-secondary">
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faFacebook} /> &nbsp;
                      </a> */}
                      <a href="https://www.instagram.com/vaish_27_0417/?hl=en">
                        <FontAwesomeIcon icon={faInstagram} target="_blank"/> &nbsp;
                      </a>
                      <a href="https://www.linkedin.com/in/vaishnavi-namdev-b08520204/">
                        <FontAwesomeIcon icon={faLinkedin} target="_blank"/> &nbsp;
                      </a>
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faYoutube} /> &nbsp;
                      </a> */}
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                      </a> */}
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faDiscord} /> &nbsp;
                      </a> */}
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faCoffee} /> &nbsp;
                      </a>
                      <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faGithub} /> &nbsp;
                      </a> */}
                    </p>
                  </p>
                </div>

                <div class="col-sm-3">
                  <img
                    className="mt-4"
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQEEdGlz-MgDug/profile-displayphoto-shrink_800_800/0/1658806134121?e=1664409600&v=beta&t=bExlJPKUXHGPZUkKKYvYIlUOW68s_1KQdYAY2aSiYTY"
                    style={{ width: "100%" }}
                  />
                  {/* <img class="mt-4 " src="./images/team4.jpg" style="width:100%"> */}
                  <h4 class="text-dark mt-2">ANSHUL SINGH</h4>
                  <p class="text-muted">BTech-EE (MITS Gwalior)</p>
                  <p>
                    I am a passionate electrical engineer having an academic
                    experience of six years in the field of electrical
                    engineering.
                    <p>Connect Me:✨</p>
                    <p class="link-secondary">
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faFacebook} /> &nbsp;
                      </a> */}
                      <a href="https://www.instagram.com/whyanshul/?hl=en">
                        <FontAwesomeIcon icon={faInstagram} target="_blank"/> &nbsp;
                      </a>
                      <a href="https://www.linkedin.com/in/anshulsingh1999/">
                        <FontAwesomeIcon icon={faLinkedin} target="_blank"/> &nbsp;
                      </a>
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faYoutube} /> &nbsp;
                      </a> */}
                      <a href="https://twitter.com/anshul266261">
                        <FontAwesomeIcon icon={faTwitter} target="_blank"/> &nbsp;
                      </a>
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faDiscord} /> &nbsp;
                      </a> */}
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faCoffee} /> &nbsp;
                      </a> */}
                      {/* <a href="https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en">
                        <FontAwesomeIcon icon={faGithub} /> &nbsp;
                      </a> */}
                    </p>
                  </p>
                </div>

                <div class="col-sm-3">
                  <img
                    className="mt-4"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQEqXHdnMFa9DA/profile-displayphoto-shrink_800_800/0/1658770872300?e=1664409600&v=beta&t=i_qOGswZTwBEwngykD9t02_7IURhjv6R3uEJoJD-tH8"
                    style={{ width: "100%" }}
                  />
                  {/* <img class="mt-4 " src="../../assets/ezgif.com-gif-maker.gif" style="width:100%"> */}
                  {/* <img src="%PUBLIC_URL%/mypic.jpg" /> */}
                  {/* <img src={pic} /> */}
                  <h4 class="text-dark mt-2">DEEPAK LODHA</h4>
                  <p class="text-muted">BTech-EC (MITS Gwalior)<br/>( Founder of <u><b>CryptoChain</b></u>)</p>
                  <p>
                    I like to hangout different - different places Obviously, I
                    like travelling. My next target is in South - Karnataka &
                    Tamil Nadu.
                    <p>Connect Me:✨</p>
                    <p class="link-secondary">
                      <a
                        href="https://www.facebook.com/deepaklodha0"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faFacebook} /> &nbsp;
                      </a>
                      <a
                        href="https://www.instagram.com/sdkosm/?hl=en"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faInstagram} /> &nbsp;
                      </a>
                      <a
                        href="https://www.linkedin.com/in/deepaklodha/"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faLinkedin} /> &nbsp;
                      </a>
                      <a
                        href="https://www.youtube.com/c/DEEPAKLODHA-Vlogs"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faYoutube} /> &nbsp;
                      </a>
                      <a
                        href="https://twitter.com/lodha_sdkosm"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faTwitter} /> &nbsp;
                      </a>
                      <a
                        href="https://discord.com/Deepak%20Lodha#1201"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faDiscord} /> &nbsp;
                      </a>
                      <a
                        href="https://www.buymeacoffee.com/deepaklodha"
                        target="_blank"
                      >
                        <FontAwesomeIcon icon={faCoffee} /> &nbsp;
                      </a>
                      <a href="https://github.com/sdkosm" target="_blank">
                        <FontAwesomeIcon icon={faGithub} /> &nbsp;
                      </a>
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>
        {/* <div>
        <Footer />
        </div> */}
      </div>
    );
  }
}
