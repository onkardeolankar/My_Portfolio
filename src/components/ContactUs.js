import React, { useState } from 'react'
import { FaGithub,FaLinkedin ,FaInstagram,FaTwitter } from 'react-icons/fa';
import axios from 'axios';
import './ContactUs.css';
import {CgMail} from 'react-icons/cg'
import {GoLocation} from 'react-icons/go'
import {IoCallOutline} from 'react-icons/io5'

let initialValue={
  name:"",
  email:"",
  message:""
}

function ContactUs() {
  const[data, setData]=useState(initialValue);

  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value});
    console.log(data);
  };
  
  const handleSubmit=()=>{
    axios
    .post("https://onkar.herokuapp.com/register",JSON.stringify(data),
    {
      headers:{
        "Content-type": "application/json"
      }})
      .then(() => setData(initialValue));
  };

  return (
    <div className='contact-margin-item' id='contact'>
    <div className='title'>CONTACT</div>
    <hr className='hr'/>
    <div className='contact-flex'>
      <div >

      <input 
      type='text'
      onChange={handleChange}
      name='name'
      className='contact-input'
      placeholder='Name'/><br/>

      <input 
      type='email'
      onChange={handleChange}
      name='email'
      className='contact-input'
      placeholder='Email'/><br/>

      <textarea 
      type='text'
      onChange={handleChange}
      name='message'
      className='contact-inputs'
      placeholder='Enter any message for me'/><br/>

      <button onClick={handleSubmit} type='button' className='contact-button'>Send</button>
      </div>

      <div className='contact-tips'>
        <label className='contact-talk'>Let's talk</label><br/>
        <div className='contact-list-main'>
        <label className='contact-list'>I am open to any Full Stack job opportunities.</label><br/>
        <a className='contact-list-all' href="mailto:onkardeolankar1996@gmail.com"><CgMail className='contact-icons'/><span className='email'>onkardeolankar1996@gmail.com</span></a><br/>
        <a target="_blank" className='contact-list-all' href="https://www.google.com/maps/place/Kiradpura,+Aurangabad,+Maharashtra+431003/@19.8973539,75.3486499,13z/data=!3m1!4b1!4m5!3m4!1s0x3bdba2ae9f2fba7d:0xe1de9f9009fc9c31!8m2!3d19.9025611!4d75.3533427" ><GoLocation className='contact-icons'/>Aurangabad, India.</a><br/>
        <a className='contact-list-all' href="tel:7972281131"><IoCallOutline className='contact-icons'/>+91-7972281131</a><br/>
        </div>
        <div className='social-media'>
        <label className='contact-list-connect'>Connect me on</label>
        <label className='social-icon-main'>
        <a target="_blank" href='https://github.com/onkardeolankar' className='social-icon'><FaGithub/><span className='tooltip'>Github</span></a>
        <a target="_blank" href='https://linkedin.com/in/onkar-deolankar-670840166' className='social-icon'><FaLinkedin/><span className='tooltip'>Linkedin</span></a>
        </label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactUs