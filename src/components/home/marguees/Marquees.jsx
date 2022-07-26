import React from "react";
import "./Marquees.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrainTram } from "@fortawesome/free-solid-svg-icons";

const Marquees = () => {
  return (
    <div>
      <div className="marquees">
        <marquee direction="left" scrollamount="7">
          <FontAwesomeIcon icon={faTrainTram} />
          <span> &nbsp;&nbsp;</span>
          Design and Developed by Manas Gupta(VC), Vaishnavi Namdev(C), Anshul Singh(M) & Deepak Lodha(M) !!
        </marquee>
      </div>
    </div>
  );
};

export default Marquees;
