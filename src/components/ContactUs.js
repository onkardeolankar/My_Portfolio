import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import "./ContactUs.css";
import { CgMail } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";

const Result = () => {
	return <p>Thank You for contacting. We will get back to you ASAP</p>;
};

const ContactUs = (props) => {
	const form = useRef();
	const [result, showResult] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_18mmv84",
				"template_i1uiu9i",
				form.current,
				"C2_leKqHfuSRpeyAi"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		showResult(true);
	};
	return (
		<>
			<div className="contact-margin-item" id="contact">
				<div className="title">CONTACT</div>
				<hr className="hr" />
				<form ref={form} onSubmit={sendEmail}>
					<div className="contact-flex">
						<div className="alexa">
							<input
								type="text"
								name="name"
								className="contact-input"
								placeholder="Name" required
							/>
							<br />

							<input
								type="email"
								name="email"
								className="contact-input"
								placeholder="Email" required
							/>
							<br />

							<textarea
								type="text"
								name="message"
								className="contact-inputs"
								placeholder="Enter any message for me" required
							/>
							<br />
							<button className="contact-button">Submit</button>
							<div className="row">{result ? <Result /> : null}</div>
						</div>
					</div>
				</form>

				<div className="contact-tips">
					<label className="contact-talk">Let's talk</label>
					<br />
					<div className="contact-list-main">
						<label className="contact-list">
							I am open to any Full Stack job opportunities.
						</label>
						<br />
						<a
							className="contact-list-all"
							href="mailto:onkardeolankar1996@gmail.com"
						>
							<CgMail className="contact-icons" />
							<span className="email">onkardeolankar1996@gmail.com</span>
						</a>
						<br />
						<a
							target="_blank"
							className="contact-list-all"
							href="https://www.google.com/maps/place/Kiradpura,+Aurangabad,+Maharashtra+431003/@19.8973539,75.3486499,13z/data=!3m1!4b1!4m5!3m4!1s0x3bdba2ae9f2fba7d:0xe1de9f9009fc9c31!8m2!3d19.9025611!4d75.3533427"
						>
							<GoLocation className="contact-icons" />
							Aurangabad, India.
						</a>
						<br />
						<a className="contact-list-all" href="tel:7972281131">
							<IoCallOutline className="contact-icons" />
							+91-7972281131
						</a>
						<br />
					</div>
					<div className="social-media">
						<label className="contact-list-connect">Connect me on</label>
						<label className="social-icon-main">
							<a
								target="_blank"
								href="https://github.com/onkardeolankar"
								className="social-icon"
							>
								<FaGithub />
								<span className="tooltip">Github</span>
							</a>
							<a
								target="_blank"
								href="https://linkedin.com/in/onkar-deolankar-670840166"
								className="social-icon"
							>
								<FaLinkedin />
								<span className="tooltip">Linkedin</span>
							</a>
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
