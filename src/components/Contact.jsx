import Button from "./Button";
import { buttonStyle } from "../styles/components";

const Contact = () => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const myForm = event.target;
		console.log(myForm)
		const formData = new FormData(myForm);

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			// .then(() => navigate("/thank-you/"))
			.catch((error) => alert(error));
	};
	return (
		<div name='contact' className='w-full h-screen flex justify-center items-center pt-24 bg-gradient-to-l from-[#0a192f] to-black '>
			<div className='w-3/4 h-3/4'>
				<form
					onSubmit={handleSubmit}
					name='contact'
					data-netlify='true'
					method='POST'
					className='flex flex-col justify-center items-center w-full mx-auto my-auto h-full'
				>
					<p className='text-7xl font-extralight text-gray-300 w-3/5'>Contact</p>
					<div className='border-b-2 border-pink-600 w-3/5 mt-2'></div>

					<p className='text-gray-300 py-8 text-3xl'>// Submit the form below or shoot me an email - sweshields@gmail.com</p>
					<div className='flex flex-col w-full justify-center items-center'>
						<input className='bg-[#ccd6f6] p-2 w-[600px] ' type='text' placeholder='Name' name='form-name' />
						<input className='my-4 p-2 bg-[#ccd6f6] w-[600px] ' type='email' placeholder='Email' name='form-email' />
						<textarea className='bg-[#ccd6f6] p-2 w-[600px] ' name='form-message' rows='10' placeholder='Message'></textarea>
						<input className={buttonStyle} type='submit' />
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
