import React from "react";
import image from "../icons/image-1.jpg";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { SiLinkedin, SiGithub } from "react-icons/si";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-margin-items" id="home">
      <div className="home-flex">
        <div>
          <label className="name-tag">
            <span className="hi-text">Hi there, I'm</span>
            <br />
            <span className="highlight">Onkar</span> Deolankar.
          </label>
          <br />
          <div className="typewriter">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .deleteChars(11)
                  .typeString(
                    'I am <span style="color:red">Web Developer.</span>'
                  )
                  .pauseFor(300)
                  .deleteChars(14)
                  .typeString(
                    '<span style="color:red">Full Stack Developer.</span>'
                  )
                  .pauseFor(300)
                  .start();
              }}
            />
          </div>
          <label className="intro">
            This is my official portfolio website to showcase my all work
            related to
            <br /> Full Stack Web Development{" "}
          </label>
          <br />
          <a target="_blank" href="https://drive.google.com/file/d/1L-iRhk7JM-1sz0WgmFk-79wG_vp90Bnm/view?usp=share_link" className="cv">
            <BiShow className="BiShow" />
            See My Resume.
          </a>
          <br />
          <div className="icons">
            <a
              target="_blank"
              href="https://linkedin.com/in/onkar-deolankar-670840166"
              className="linkedin-icon"
            >
              <SiLinkedin className="SiLinkedin" />
              Linkedin
            </a>
            <a
              target="_blank"
              href="https://github.com/onkardeolankar"
              className="github-icon"
            >
              <SiGithub className="SiGithub" />
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background" alt="laptop-guy"></div>
      </div>
    </div>
  );
}

export default Home;
