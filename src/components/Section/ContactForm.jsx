import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import "./css/contactForm.css";
const ContactForm = () => {
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_ukemjrk",
				"template_n6exofq",
				e.target,
				"6OJGCtGyPPT5LR27j"
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
	};
	const handleSubmit = () => {
		toast("Your mail was sent!", {
			icon: "📨  ",
		});
	};
	return (
		<div className="container contactForm">
			<form onSubmit={sendEmail}>
				<div className="col-8 form-group mx-auto">
					<label>Name</label>
					<input
						type="text"
						placeholder="John Doe"
						name="name"
						required="required"
					/>
				</div>
				<div className="col-8 form-group pt-2 mx-auto">
					<label>Email</label>
					<input
						type="email"
						placeholder="email@example.com"
						name="email"
						required="required"
					/>
				</div>
				<div className="col-8 form-group pt-2 mx-auto">
					<label>Subject</label>
					<input
						type="text"
						placeholder="Topic"
						name="subject"
						required="required"
					/>
				</div>
				<div className="col-8 form-group pt-2 mx-auto">
					<label>Message</label>
					<textarea
						required="required"
						id=""
						cols="30"
						rows="8"
						placeholder="Hello! I am interested in your products. Please contact me."
						className="textArea"
						name="message"
					></textarea>
				</div>
				<Toaster position="top-center" reverseOrder={false} />

				<div className="col-8 pt-3 mx-auto">
					<input
						type="submit"
						className="btnContact"
						value="Send Message"
						onClick={handleSubmit}
					/>
				</div>
			</form>
		</div>
	);
};
export default ContactForm;
