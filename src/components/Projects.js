import React from "react";
import "./Projects.css";
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className="projects-margin-item" id="projects">
      <div className="title">PROJECT</div>
      <hr className="hr" />
      <div className="project-flexx">
        <div className="cards">
          <img
            src="https://i.pcmag.com/imagery/articles/025Oaztt0ita5uBZZnF7f6p-1..v1627072521.png"
            className="project-dp"
            alt="gmail-clone"
          />
          <div className="project-all">
            <label className="project-title">Gmail clone</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="hhttps://github.com/onkardeolankar/gmail-clone-fend" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://incandescent-tiramisu-9886d5.netlify.app" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/onkardeolankar/gmail-clone-bend" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
              This is Fullstack MERN website is used as Gmail.
              <br />
              This application is used to send and recive Mails.
            </p>
            <br />
            <label className="project-tech">
              <span className="project-tech1">TECH USED:</span>
              <span className="project-tech2">
                &nbsp;React, Node, Express, MongoDB.
              </span>
            </label>
          </div>
        </div>
        <div className="cards">
          <img
            src="https://i.pcmag.com/imagery/articles/025Oaztt0ita5uBZZnF7f6p-1..v1627072521.png"
            className="project-dp"
            alt="gmail-clone"
          />
          <div className="project-all">
            <label className="project-title">E-Commerce</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/onkardeolankar/e-comm-frontend" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://glowing-gumption-82f38f.netlify.app" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/onkardeolankar/e-comm-backend" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
              This is Fullstack MERN website is used as E-Commerce website.
              <br />
              This application is used for online shopping.
            </p>
            <br />
            <label className="project-tech">
              <span className="project-tech1">TECH USED:</span>
              <span className="project-tech2">
                &nbsp;React, Node, Express, MongoDB.
              </span>
            </label>
          </div>
        </div>
        <div className="cards">
          <img
            src="https://wallpapercave.com/wp/upmtCfm.jpg"
            className="project-dp"
            alt="pokemon"
          />
          <div className="project-all">
            <label className="project-title">Pokemon_App</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/onkardeolankar/pokedex_api" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://pokedex-api-nine.vercel.app/" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/onkardeolankar/pokedex_api" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
            Fetches the data from the pokemon api with its respective
									factors required.
              <br />
      
            </p>
            <br />
            <label className="project-tech">
              <span className="project-tech1">TECH USED:</span>
              <span className="project-tech2">
                &nbsp;React.
              </span>
            </label>
          </div>
        </div>
        <div className="cards">
          <img
            src="https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?b=1&k=20&m=1191001701&s=612x612&w=0&h=cL3uI5lZY3rjg7nb-58Y92qHDbxTTtYfsSchO74O9m8="
            className="project-dp"
            alt="movie_app"
          />
          <div className="project-all">
            <label className="project-title">Movie App</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/onkardeolankar/movie_appdeploy" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://movie-appdeploy.vercel.app/" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/onkardeolankar/movie_appdeploy" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
            Created an app which uses useState and other react hooks features with backend involved as NodeJs.
              <br />
              
            </p>
            <br />
            <label className="project-tech">
              <span className="project-tech1">TECH USED:</span>
              <span className="project-tech2">
                &nbsp;React, Node, Express, MongoDB.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
