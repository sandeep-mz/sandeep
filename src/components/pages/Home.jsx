import React from "react";
import "../../style/home.css";
import myProfilePhoto from "../../images/my-avtar.png";
import { FaLinkedin } from "react-icons/fa";
import youtube from "../../images/youtube.jpg";
import sportify from "../../images/spotify-clone.webp";
import blinkit from "../../images/blinkit.webp";
import excel from "../../images/excel.webp";
import mzshooping from "../../images/shooping.png";
import food from "../../images/food.png";
import book from "../../images/book.png";
import weather from "../../images/weather.png";
import travel from "../../images/travel.png";
import postoffice from "../../images/postoffice.png";
import authentication from "../../images/authentication.avif";
import submission from "../../images/submission.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
            <FaLinkedin />
            Connect with LinkedIn{" "}
          </a>
        </div>
      </div>

      <div className="recent-projects">
        <h2>Recent Projects</h2>
        <Slider {...settings}>
          <a href="https://sandeep-mz.github.io/Excel-clone/">
            <div className="projects pro">
              <img src={excel} alt="Project 1" />
              <div className="title">
                <h3>Google Sheet Clone</h3>
                {/* <p><a href="https://github.com/sandeep-mz/Excel-clone/"></a>Code</p> */}
              </div>
              <p>
                Incorporates DOM manipulation techniques to dynamically create,
                modify, and delete multiple sheet, providing a responsive
                experience to users.
              </p>
            </div>
          </a>
          <a href="https://sandeep-mz.github.io/blinkit-clone/">
            <div className="projects pro">
              <img src={blinkit} alt="Project 2" />
              <h3>Blinkit Clone</h3>
              <p>
                Dive into core web development concepts by constructing a static
                version of the Blinkit app. This project involves creating an
                engaging interface using HTML and CSS.
              </p>
            </div>
          </a>

          <a href="https://sandeep-mz.github.io/Spotify-clone/index.html">
            <div className="projects pro">
              <img src={sportify} alt="Project 3" />
              <h3>Spotify Clone</h3>
              <p>
                Creation of a Spotify clone using HTML and CSS, The objective is
                to imitate the primary interfaces and functionality of the
                Spotify web app..
              </p>
            </div>
          </a>

          <a href="https://sandeep-mz.github.io/YouTube-clone/">
            <div className="projects pro">
              <img src={youtube} alt="Project 4" />
              <h3>Youtube Clone</h3>
              <p>
                Front-end developer proficient in HTML, CSS, JavaScript.In UI/UX
                design and integrating APIs. Skilled in creating responsive web
                applications with attention to detail.
              </p>
            </div>
          </a>
        </Slider>
      </div>

      <div className="iknow">
        <h2>Recent Projects</h2>
        <div className="sections">
          <div className="asection">
            <h3>Front-End</h3>
            <div className="tags">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>Bootstrap</p>
              <p>React</p>
              <p>Redux</p>
            </div>
          </div>
          <div className="bsection">
            <h3>Back-End</h3>
            <div className="tags">
              <p>PHP</p>
              <p>Express.js</p>
              <p>Python</p>
              <p>Java Swing</p>
            </div>
          </div>
          <div className="csection">
            <h3>Database</h3>
            <div className="tags">
              <p>MySQL</p>
            </div>
          </div>

          <div className="dsection">
            <h3>Tools</h3>
            <div className="tags">
              <p>Github</p>
              <p>Visual Studio Code</p>
              <p>Visual Studio</p>
              <p>NetBeans</p>
              <p>Figma</p>
              <p>Canvas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="moreProject">
        {/*------------------------ project 1st  */}
        <div className="mzproject">
          <div>
            <img src={mzshooping} alt="logo" />
          </div>
          <div className="projectTitle">
            <h3>MzShop</h3>
            <p>Html, CSS, JavaScript</p>
          </div>
          <div className="mzicon">
            <a href="https://shoppingcart-henna.vercel.app/" target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        {/* -----------------------project 2nd  */}
        <div className="mzproject">
          <div>
            <img src={food} alt="logo" />
          </div>
          <div className="projectTitle">
            <h3>Food Order</h3>
            <p>Html, CSS, JavaScript, APIs</p>
          </div>
          <div className="mzicon">
            <a href="https://foodsystem-steel.vercel.app/" target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
         {/* -----------------------project 3nd  */}
         <div className="mzproject">
          <div>
            <img src={book} alt="logo" />
          </div>
          <div className="projectTitle">
            <h3>Bookstore</h3>
            <p>Html, CSS, JavaScript, APIs</p>
          </div>
          <div className="mzicon">
            <a href="https://bookstore-nu-ashen.vercel.app/" target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        {/* -----------------------project 4nd  */}
        <div className="mzproject">
          <div>
            <img src={weather} alt="logo" />
          </div>
          <div className="projectTitle">
            <h3>Weather-city</h3>
            <p>Html, CSS, JavaScript</p>
          </div>
          <div className="mzicon">
            <a href="https://city-weather-two.vercel.app" target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
         {/* -----------------------project 5nd  */}
         <div className="mzproject">
          <div>
            <img src={travel} alt="logo" />
          </div>
          <div className="projectTitle">
            <h3>Travel media</h3>
            <p>Html, CSS, JavaScript, React</p>
          </div>
          <div className="mzicon">
            <a href="https://travelmedia.vercel.app" target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        {/* -----------------------project 6nd  */}
        <div className="mzproject">
          <div>
            <img src={postoffice} alt="logo" />
          </div>
          <div className="projectTitle">
            <h3>Post Office</h3>
            <p>Html, CSS, JavaScript, React</p>
          </div>
          <div className="mzicon">
            <a href="https://sandeep-mz.github.io/postoffice/" target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        {/* -----------------------project 7nd  */}
        <div className="mzproject">
          <div>
            <img src={authentication} alt="logo"/>
          </div>
          <div className="projectTitle">
            <h3>Authentication</h3>
            <p>Html, CSS, JavaScript, React</p>
          </div>
          <div className="mzicon">
            <a href="https://authentication-nu-eight.vercel.app/" target="_blank">
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
        {/* add more projects here */}

      </div>

      <div className="extra-mz">
        <div className="pub">
           <img src={submission} alt="logo" />
          
          <div className="extra-title">
            <h3>Paper Publishing of BE Final Years Project</h3>
            <p>Our team proudly announces the publication of our BE final year project research paper in Recent Innovations in <b>Wireless Network Security</b>. Highlighting key findings and comprehensive analysis, our paper delves into cutting-edge developments, evaluating security protocols, encryption techniques, and intrusion detection systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
