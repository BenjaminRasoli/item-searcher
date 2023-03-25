import React from "react";
import { GrGithub } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "./Footer.css";
function Footer() {
  return (
    <div className="footercontainer">
      <div className="maincontainer">
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">Web design</a>
            </li>
            <li>
              <a href="#">Development</a>
            </li>
            <li>
              <a href="#">Hosting</a>
            </li>
          </ul>
        </div>
        <div className="about">
          <h3>About</h3>
          <ul>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Legacy</a>
            </li>
          </ul>
        </div>
        <div className="careers">
          <h3>Careers</h3>
          <ul>
            <li>
              <a href="#">Job openings</a>
            </li>
            <li>
              <a href="#">Employee success</a>
            </li>
            <li>
              <a href="#">Benefits</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logos">
        <a className="instagram" href="#about">
          <BsInstagram />
        </a>

        <a className="github" href="#about">
          <GrGithub />
        </a>

        <a className="facebook" href="#about">
          <BsFacebook />
        </a>
      </div>
      <div className="company">
        <p>Company Name © 2018</p>
      </div>
    </div>
  );
}

export default Footer;
