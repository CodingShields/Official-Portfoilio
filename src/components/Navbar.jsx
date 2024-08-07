import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Modal from "./Modal";
import resume from "../assets/documents/resume.pdf";
import codingshieldslogo from "../assets/codingshieldslogo.png";

const Navbar = ({ mobile }) => {
	const [nav, setNav] = useState(false);

	const [copied, setCopied] = useState(false);

	const handleClick = () => setNav(!nav);

	const handleCopyToClipboard = () => {
		const email = "sweshields@gmail.com";
		navigator.clipboard
			.writeText(email)
			.then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 3000); // Reset copied state after 3 seconds
			})
			.catch((error) => console.error("Unable to copy to clipboard: ", error));
	};

	const handleResumeDownload = () => {
		window.open(resume);
	};

	return (
		<div className='fixed w-full h-fit flex z-10 justify-between items-center px-4 bg-black hover:bg-opacity-30 bg-opacity-50 text-gray-300 transition-all ease-in-out duration-700 group'>
			<div>
				{" "}
				<Link to='home' smooth={true} duration={500}>
					<img
						src={codingshieldslogo}
						className='w-16 sm:w-8 sm:h-8 hover:scale-150 transition-all duration-500 ease-in-out rounded-2xl mt-16 ml-12 hover:cursor-pointer hover:animate-pulse'
					/>
				</Link>
			</div>

			{/* menu */}
			<ul className='hidden md:flex text-white text-xl space-x-8 group-hover:text-pink-300 ease-in-out duration-300 transition-all'>
				<li className='hover:text-pink-500 hover:scale-125 duration-200'>
					<Link to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='hover:text-pink-500 hover:scale-125 duration-200'>
					<Link to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='hover:text-pink-500 hover:scale-125 duration-200'>
					<Link to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='hover:text-pink-500 hover:scale-125 duration-200'>
					<Link to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='hover:text-pink-500 hover:scale-125 duration-200 '>
					<Link to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* Mobile menu */}
			<ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
				<li className='py-6 text-4xl'>
					<Link onClick={handleClick} to='home' smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{" "}
					<Link onClick={handleClick} to='about' smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{" "}
					<Link onClick={handleClick} to='skills' smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{" "}
					<Link onClick={handleClick} to='work' smooth={true} duration={500}>
						Work
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					{" "}
					<Link onClick={handleClick} to='contact' smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
				<div className='animate-pulse hover:shadow-none hover:animate-none'>
					<ul className='space-y-[2px]'>
						<li className='w-[160px] h-[80px] flex pl-4 hover:w-[215px] justify-between items-center ml-[-100px] hover:ml-[25px]  bg-blue-600 hover:scale-125 ease-in-out transition-all duration-300 hover:my-4'>
							<a
								className='flex justify-between items-center w-full text-gray-300'
								href='https://www.linkedin.com/in/mikeshieldsdev/'
								target='_blank'
							>
								Linkedin <FaLinkedin className='px-2 h-20' size={48} />
							</a>
						</li>
						<li className='w-[160px] h-[80px] flex pl-4 hover:w-[215px] justify-between items-center ml-[-100px] hover:ml-[25px]  duration-300 bg-[#333333]  hover:scale-125 ease-in-out transition-all hover:my-4'>
							<a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/CodingShields' target='_blank'>
								Github <FaGithub className='px-2 h-20' size={48} />
							</a>
						</li>
						<li
							onClick={handleCopyToClipboard}
							className='w-[160px] h-[80px] flex pl-4 hover:w-[215px] justify-between items-center ml-[-100px] hover:ml-[25px] duration-300 bg-[#6fc2b0] hover:scale-125 ease-in-out transition-all hover:my-4'
						>
							<a className='flex justify-between items-center w-full text-gray-300' href={`mailto:sweshields@gmail.com`}>
								Email <HiOutlineMail className='px-2 h-20' size={48} />
							</a>
						</li>
						<Modal isOpen={copied} onClose={() => setCopied(false)} children={"Email Copied To Clipboard"} />

						<li
							onClick={handleResumeDownload}
							className='w-[160px]  h-[80px] flex pl-4 justify-between items-center ml-[-100px] hover:ml-[25px] hover:w-[215px] duration-300 bg-[#565f69] hover:scale-125 ease-in-out transition-all hover:my-4'
						>
							<a className='flex justify-between items-center w-full text-gray-300 ' href='/'>
								Resume <BsFillPersonLinesFill className='px-2 h-20' size={48} />
							</a>
						</li>
						<li className='w-[160px]  h-[80px] flex pl-4 justify-between items-center ml-[-100px] hover:ml-[25px] hover:w-[215px] duration-300 bg-[#565f69] hover:scale-125 ease-in-out transition-all hover:my-4'>
							<a className='flex justify-between items-center w-full text-gray-300 ' href='/'>
								DEV Garage COMING SOON!
								<BsFillPersonLinesFill className='px-2 h-20' size={48} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
