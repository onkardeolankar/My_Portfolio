import React from 'react';
import { AiFillMail } from "react-icons/ai";
import { MdSettingsPhone } from "react-icons/md";
import { FaInstagramSquare,FaGithub,FaLinkedin, FaTwitter } from "react-icons/fa";
import Typical from "react-typical";



const Home = () => {
  return (

        <div className="home-details">
			<div className="home-icons">
				<p><a href='https://instagram.com/cruzer_dax/?igshid=YmMyMTA2M2Y%3D' className='Instagram'><FaInstagramSquare /></a></p>
            	<p><a href='https://github.com/onkardeolankar' className='GitHub'><FaGithub /></a></p>
            	<p><a href='https://linkedin.com/in/onkar-deolankar-670840166' className='Linkedin'><FaLinkedin /></a></p>
				<p><a href='https://twitter.com/Cruzer_Dax?t=K1Wiiy_05uzaGmE_OTJhXA&s=09' className='Twitter'><FaTwitter /></a></p>
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
										"Onkar Deolankar",
										2000,
										"Full Stack Developer",
										2000,
										"Mern Stack Dev",
										2000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack of building applications with front and back end
								operations.
							</span>
						</span>
						<div className="personal_info">
					<p className='email-id'><AiFillMail/>onkardeolankar@gmail.com</p>
            		<p className='contact-no-mine'><MdSettingsPhone />+91 7972281131</p></div>
					</div>

						<div className="resume">
							<a href='https://drive.google.com/file/d/1VbRQ6nrDEd1jpXy0fE9f6MPz3WFAihJM/view?usp=drivesdk' download="Onkar's Resume.pdf" target="_blank">
								<button className="btn highlighted-btn">Resume</button>
							</a>
						</div>
        </div>
 
  )
}

export default Home
