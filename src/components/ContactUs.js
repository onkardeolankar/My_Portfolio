import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
	return <p>Your Name has been successfully sent.I will conatct you ASAP</p>;
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
			<div className="contact-details">
				<form ref={form} onSubmit={sendEmail}>
					<div className="formword">
						<h2>Hello!!!</h2>
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
					<div className="formword">
						<span>Message</span>
						<br />
						<textarea name="message" required></textarea>
						<button>Submit</button>
						<div className="row">{result ? <Result /> : null}</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default ContactUs;
