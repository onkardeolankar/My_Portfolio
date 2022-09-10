import React from 'react';
import { AiFillMail } from "react-icons/ai";
import { MdSettingsPhone } from "react-icons/md";
import { FaInstagramSquare,FaGithub,FaLinkedin } from "react-icons/fa";
import Typical from "react-typical";


const Home = () => {
  return (

        <div className="home-details">
			<div className="home-icons">
				<p><a href='https://www.instagram.com/cruzer_dax/?igshid=YmMyMTA2M2Y%3D' className='Instagram'><FaInstagramSquare /></a></p>
            	<p><a href='https://github.com/onkardeolankar' className='GitHub'><FaGithub /></a></p>
            <	p><a href='https://www.linkedin.com/in/onkar-deolankar-670840166' className='Linkedin'><FaLinkedin /></a></p>
			</div>
            
            <div className="profile-details-role">
			<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
						<span className="primary-text">
							{" "}
							<h2>Hey I'm</h2>
							<h1>
								{" "}
								<Typical
									loop={Infinity}
									steps={[
										"Onkar Deoalankar",
										2000,
										"Full Stack Developer",
										1000,
										"Mern Stack Dev",
										1000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building appliactions with fron and back end
								operations.
							</span>
						</span>
						<div className="personal_info">
					<p><AiFillMail/>onkardeolankar@gmail.com</p>
            		<p><MdSettingsPhone />+91 7972281131</p></div>
					</div>

						<div className="resume">
							<a href="Onkar" download="Onkar Onkar.pdf">
								<button className="btn highlighted-btn">Resume</button>
							</a>
						</div>
						
					


        </div>
 
  )
}

export default Home
