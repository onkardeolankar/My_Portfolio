import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

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
        
        <div className="contact-more">
        <h1>Contact Us</h1></div>
			<div className="contact-details">               
				<form ref={form} onSubmit={sendEmail}>
					<div className="conatct-info">
						<h2>Hello Guys!!!</h2>
						<span>Full Name</span>
						<br />
						<input type="text" className="input100" name="fullName" required />
						<br />
						<span>Phone No</span>
						<br />
						<input type="text" className="input100" name="phone" required />
						<br />
						<span>Enter Email</span>
						<br />
						<input type="text" className="input100" name="email" required />
						<br />
					</div>
					<br />
					<div className="message-box">
						<span>Message</span>
						<br />
						<textarea name="message" required></textarea><br />
						<button className="btn-sub">Submit</button>
						<div className="row">{result ? <Result /> : null}</div>
					</div>
				</form>

				<div className="contact-reg">
					<h3 className="contact-list">
						Email:{" "}
						<span className="contact-name">
							onkardeolankar1996@gmail.com
						</span>
					</h3>
					<br />
					<h3 className="contact-list">
						Address:{" "}
						<span className="contact-name">Aurangabad, Maharashtra, India.</span>
					</h3>
					<br />
					<h3 className="contact-list">
						Phone Number: <span className="contact-name">7972281131</span>
					</h3>
					<br />
				</div>
			</div>
            
		</>
	);
};

export default ContactUs;
