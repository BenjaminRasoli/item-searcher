import React from "react";
import { GrGithub } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "./Navbar.css";
import growtopia from "../images/growtopia.png"

function Navbar() {
  return (
    <>
      <ul>
        <div className="navcontainer">
          <div className="mainnav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </div>

          <div className="navlogo">
            <a href="/">
              {" "}
              <img
                src=  {growtopia}
                alt="growtopia logo"
              />{" "}
            </a>
          </div>

          <div className="socialmedia">
            <li>
              <a className="instagram" href="#about">
                <BsInstagram />
              </a>
            </li>
            <li>
              <a className="github" href="#about">
                <GrGithub />
              </a>
            </li>
            <li>
              <a className="facebook" href="#about">
                <BsFacebook />
              </a>
            </li>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
