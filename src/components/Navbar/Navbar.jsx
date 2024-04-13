import React, { useState } from "react";
import "./navbar.css"; //for desktop browsers
import "./mobileNav.css"; //for mobile browsers

import { FaHome, FaEnvelope, FaFileAlt, FaUsers, FaLinkedin, FaGithub, FaYoutube, FaInstagram, FaBars } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Navbar = ({ children }) => {
  

  

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
      path: "/Blog",
      name: "Blog",
      icon: <FaFileAlt />,
    },
    {
      path: "/Contact",
      name: "Contact",
      icon: <FaEnvelope />,
    },
    {
      name: "Follow Me",
      isHeading: true,
      icon: <FaUsers />,
    },
    {
      path: "https://drive.google.com/file/d/18Jpad9XUrZtARGwe8jdF8r8-o2-keWpE/view?usp=sharing",
      name: "Resume",
      icon: <FaFileAlt />,
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
  ];

  return (
    <div className="container">
      {/* For mobile view */}

      {/* For desktop view */}
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
            title={item.name} // for tooltip
          >
            <div className="icon">{item.icon}</div>
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Navbar;
