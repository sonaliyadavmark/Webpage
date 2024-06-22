import React from "react";
import "./Navbar.css";
import Kness from "../../img/knee.jpg";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
        <div className="main">
      <div className="nav">
        <div className="nav-ele">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>About Us</li>
            <li>Treatments</li>
            <li>Destinations</li>
            <li>Hospitals</li>
            <li>FAQS</li>
            <li>Blog</li>
            <li>Request A Quote</li>
          </ul>
        </div>
      </div>
      <div className="knee-icon">
        <img src={Kness} alt="" />
      </div>
      </div><br />
      <div className="nav1">
        <div className="nav-ele1">
          <ul style={{ listStyleType: "none" }}>
            <li>Overview</li>
            <li>Eligibility</li>
            <li>Preparation</li>
            <li>About Treatment</li>
            <li>Post Treatment care</li>
            <li>Recovery Tips</li>
            <li>Patient Stories</li>
            <li>Request A Quote</li>
          </ul>
        </div>
        </div>
        <hr/>
    </div>
  );
};

export default Navbar;
