import React from "react";
import "../../style/home.css";
import myProfilePhoto from "../../images/my-avtar.png";
import { FaLinkedin } from "react-icons/fa";
import youtube from "../../images/youtube.jpg";
import sportify from "../../images/spotify-clone.webp";
import blinkit from "../../images/blinkit.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 3,
  };

  return (
    <div className="home-container">
      <div className="about-section">
        <div className="profile">
          <img src={myProfilePhoto} alt="Profile" />
        </div>
        <div className="education">
          <h2>Sandeep Maurya</h2>
          <p>Bachelor's Degree in Computer Science - SPPU</p>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />Connect with LinkedIn{" "}
          </a>
        </div>
      </div>

      <div className="recent-projects">
        <h2>Recent Projects</h2>
        <Slider {...settings}>
          <div className="projects">
            <img src={youtube} alt="Project 1" />
            <h3>Title 1</h3>
            <p>Description 1</p>
          </div>
          <div className="projects">
            <img src={blinkit} alt="Project 2" />
            <h3>Title 2</h3>
            <p>Description 2</p>
          </div>
          <div className="projects">
            <img src={sportify} alt="Project 3" />
            <h3>Title 3</h3>
            <p>Description 3</p>
          </div>
          <div className="projects">
            <img src={youtube} alt="Project 4" />
            <h3>Title 4</h3>
            <p>Description 4</p>
          </div>
          <div className="projects">
            <img src={youtube} alt="Project 5" />
            <h3>Title 5</h3>
            <p>Description 5</p>
          </div>
          <div className="projects">
            <img src={youtube} alt="Project 6" />
            <h3>Title 6</h3>
            <p>Description 6</p>
          </div>

          <div className="projects">
            <img src={youtube} alt="Project 6" />
            <h3>Title 6</h3>
            <p>Description 6</p>
          </div>

        </Slider>
      </div>
    </div>
  );
};

export default Home;
