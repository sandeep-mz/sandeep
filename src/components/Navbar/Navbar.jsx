import React from "react";
import "./navbar.css";
// import myAvatar from "../../images/my-avtar.png";
import { FaHome, FaEnvelope, FaFileAlt,FaUsers } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
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
      path: "/Resume",
      name: "Resume",
      icon: <FaFileAlt />,
    },
    {
      path: "/Contact",
      name: "Contact",
      icon: <FaEnvelope />,
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

      < div className="sidebar">
    
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
            title={item.name} // for tooltip
          >
            <div className="icon">{item.icon}</div>
            <div className="link-text">
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
