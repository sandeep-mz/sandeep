import React from "react";
import "../../style/about.css";
import about from "../../images/about.png";
import fire from "../../images/fire.png";
import project from "../../images/project.png";
import team from "../../images/team.png";
import win from "../../images/win.png";

function About() {
  return (
    
    <section className=" about container section " id="about">
      <h2>About Me</h2>
      <div className="about-content ">
        <div class="gallery"> 
        <img src={about} alt="about-img" className="about-img" />
        </div>
        <div className="about-data ">
          <div className="about-info">
            <p className="about-discription">
              I am deeply passionate about web development, and my unwavering
              commitment to excellence, teamwork, and continuous personal and
              professional growth drives my journey in this dynamic field. With
              a thirst for knowledge and a relentless pursuit of innovation, I
              thrive in the ever-evolving world of web technologies.
            </p>
            <a href="https://doc-04-6c-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/g7i30kms4cvqug0ck0isqa8v17vecpu2/qdnttg12i6c67fr0l54mt7h3dlppa0rn/1710362475000/3/100258980398847536715/APznzaZVYpf4jaSE1Q548HN9wm0a9zfrneZeFjno6ljX3nSWeaXbIqi653veqzjtDaFNg2WtIKgVvJowqNaaX-SRkbjBmt66-8hy8AXHu5FDUXfkwIFfbkU75hq7XNAePo-HV_tFXWKQiGuJ1O8F_ZWAaS7JFmFiCdu7h3R_AIHF7geeto1kPkc_Ev5aSwIP6Ce5ta3bHCFzAHQyCsL-YU8CG69n6V9GV9yds3jQ54896piM5-ni8NXh5OCg07ZfsltgfR7dcjXLccXn5oaRKk-QXQQnmUmmSTKx6VHrDqrcNVPPH0dfdqa_HnY79026yMk5zGCFDO59DbVGPmu1PDrvZZozh-NZ0-36FscLdabKU8jq687BQUdpFNuFBu5i2hPuMNPDf4GnEi-LsYTowB5x5DSQvSzD50RTE84wAO9zrd0yb6iXNHs=?authuser=0&nonce=mb1tk3krn1ses&user=100258980398847536715&hash=lu5jdnqucm0dqs02gf9d88gbqhh1ouud" className="btn">
              Download CV
            </a>
          </div>

          <div className="about-skills ">
            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Development</h3>
                <span className="skills-number development">90%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">UI/UX design</h3>
                <span className="skills-number">80%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage"></span>
              </div>
            </div>

            <div className="skills-data">
              <div className="skills-title">
                <h3 className="skills-name">Programming</h3>
                <span className="skills-number">75%</span>
              </div>
              <div className="skills-bar">
                <span className="skills-percentage"></span>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div className="ido">
        <div className="mz">
          <img src={fire} alt="logo" />
          <div className="mz-title">
            <h3>1274+</h3>
            <p>Coding Question Solved</p>
          </div>
        </div>

        <div className="mz">
          <img src={project} alt="logo" />
          <div className="mz-title">
            <h3>19+</h3>
            <p>Projects Completed</p>
          </div>
        </div>

        <div className="mz">
          <img src={team} alt="logo" />
          <div className="mz-title">
            <h3>07+</h3>
            <p>Team Project Complete</p>
          </div>
        </div>

        <div className="mz">
          <img src={win} alt="logo" />
          <div className="mz-title">
            <h3>49</h3>
            <p>Heighest Streak in coding</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
