import React from 'react';
import { AiFillMail } from "react-icons/ai";
import { MdSettingsPhone } from "react-icons/md";
import { FaInstagramSquare,FaGithub,FaLinkedin } from "react-icons/fa";


const Home = () => {
  return (

        <div className="carding">
            <p><a href='https://www.instagram.com/cruzer_dax/?igshid=YmMyMTA2M2Y%3D' className='Instagram'><FaInstagramSquare /></a></p>
            <p><a href='https://www.linkedin.com/in/onkar-deolankar-670840166' className='Twitter'><FaGithub /></a></p>
            <p><a href='https://www.linkedin.com/in/onkar-deolankar-670840166' className='Linkedin'><FaLinkedin /></a></p>
            <div className='Container'>
            <h1>Hey I'm Onkar Deoalankar</h1>
            <h2>Full Stack Web Developer</h2>
            <p><AiFillMail/>onkardeolankar@gmail.com</p>
            <p><MdSettingsPhone />+91 7972281131</p>
        </div>
    </div>
 
  )
}

export default Home
