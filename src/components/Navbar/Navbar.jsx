import React from "react";
import "./navbar.css";
import { useState } from "react";
import myAvatar from "../../images/my-avtar.png";
import { FaHome, FaBars, FaEnvelope, FaFileAlt, FaUsers, } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Home",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/About",
      name: "About",
      icon: <BsFillPersonFill />,
    },
    {
      path: "/Contact",
      name: "Contact",
      icon: <FaEnvelope />,
    },
    {
      path: "/Resume",
      name: "Resume",
      icon: <FaFileAlt />,
    },
    // Heading and social media links
    {
      name: "Follow Me",
      isHeading: true,
      icon: <FaUsers />,
    },
    {
      name: "LinkedIn",
      path: "https://www.linkedin.com/in/sandeepmz/",
      icon: <FaLinkedin />,
    },
    {
      name: "GitHub",
      path: "https://github.com/sandeep-mz/",
      icon: <FaGithub />,
    },
    {
      name: "YouTube",
      path: "https://www.youtube.com/@sortgeek/",
      icon: <FaYoutube />,
    },
    {
      name: "Instagram",
      path: "https://www.instagram.com/sandeeppmz/",
      icon: <FaInstagram />,
    },

    // Add more links as needed
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top-section ">
          <img
            src={myAvatar}
            alt="Logo"
            style={{
              display: isOpen ? "block" : "none",
              height: "50px",
              width: "53px",
              borderRadius: "50%",
              backgroundColor: "#B8DBD9",
              marginLeft: "3%",
            }}
            className="logo"
          />
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
            title={item.name} // for tooltip
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link-text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Navbar;