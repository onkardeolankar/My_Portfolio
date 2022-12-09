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
            src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg"
            className="project-dp"
            alt="food-app"
          />
          <div className="project-all">
            <label className="project-title">Food Delivery App</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/onkardeolankar/food-app-frontend" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://food-app-delivery.vercel.app/login" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/onkardeolankar/food-app-backend" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
            A Food Delivery App created with React as front end and Nodejs as a backend which which orders food from its api stored in database and delivers to the respective address entered by the client.
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
            src="https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1-1536x1024.jpg"
            className="project-dp"
            alt="chat-app"
          />
          <div className="project-all">
            <label className="project-title">Chat Application</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/onkardeolankar/chap-app-frontend" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://chap-app-front.vercel.app/login" className="project-links">
                View site <FaExternalLinkAlt />
              </a>
              <a target="_blank" href="https://github.com/onkardeolankar/chap-app-backend" className="project-links">
                Github BE <SiGithub />
              </a>
            </label>
            <p className="project-info">
            A Chat Application created with React as front end and Nodejs which creates a new user and we chat with our friends and all the data gets stored in the database.
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
            <label className="project-title">Gmail clone</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/onkardeolankar/gmail-clone-fend" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://gmail-clone-fend.vercel.app/signin" className="project-links">
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
            src="http://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq"
            className="project-dp"
            alt="e-comm"
          />
          <div className="project-all">
            <label className="project-title">E-Commerce</label>
            <br />
            <label className="project-flex-links">
              <a target="_blank" href="https://github.com/onkardeolankar/e-comm-frontend" className="project-links">
                Github FE <SiGithub />
              </a>
              <a target="_blank" href="https://e-comm-fend.vercel.app/login" className="project-links">
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
        <br />
        <br />
        <div className="credentials">
            <label className="project-title">Credentials</label>
            <br />      
            <p className="project-info">
            Email : onkar@gmail.com
              <br />
            Password : Pass@12345
            </p>
            <br />
            <label className="project-tech">
              <span className="project-tech1"> COMMON :</span>
              <span className="project-tech2">
                &nbsp;For all the Projects of MERN STACK.
              </span>
            </label>
          </div>
      </div>
    </div>
  );
}

export default Projects;
