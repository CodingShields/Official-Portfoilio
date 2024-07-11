import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Button from "./Button";
import { buttonStyle } from "../styles/components";
const Home = ({ mobile }) => {
	const [active, setActive] = useState(false);

	const [activeBanner, setActiveBanner] = useState(false);

	useEffect(() => {
		const timer = () => {
			setTimeout(() => {
				setActiveBanner(true);
			}, 5000);
		};
		timer();
	}, []);

	const handleMouseOver = () => {
		setActive(true);
	};

	const handleMouseOut = () => {
		setActive(false);
	};

	return (
		<div name='home' className='w-full sm:min-w-screen h-screen overscroll-none'>
			<div className='w-full  mx-auto px-8 flex flex-col justify-center sm:pb-24 sm:pt-12 h-full items-center -wull'>
				<div className='z-10 group mt-12 w-3/4 sm:w-full h-fit'>
					<p className='text-pink-600 text-3xl  animate-bounce  font-semibold w-full'>Hi, my name is</p>
					<h1 className=' text-9xl sm:text-5xl whitespace-nowrap font-thinner text-[#ccd6f6] '>Mikey Shields</h1>
					<h2 className='text-5xl sm:text-2xl  text-[#8892b0] mt-4 font-thin sm:mt-4 indent-12 sm:indent-4'>
						{" <> "} Software Engineer {" </> "}
					</h2>
					<p className='tracking-wider sm:text-center leading-[64px] sm:leading-[32px] text-white py-2 w-fit sm:px-4 sm:py-4 text-3xl sm:text-[17px] sm:overflow-x-clip sm:w-full sm:ml-0 ml-20 px-4  text-center  my-4 transition-all ease-in-out duration-500'>
						I’m a Front-End developer specializing in building designing exceptional digital experiences. Currently, I’m focused on building customize
						responsive web applications. Passionate about serverless architecture, cloud computing, and beautiful UI/UX.
					</p>

					<div className='transition-all ease-in-out duration-700 cursor-pointer mt-4 '>
						<Button
							text='View Work'
							style={buttonStyle}
							to='work'
							className='text-white group border-2 px-6 py-3 my-2 flex w-fit items-center bg-pink-600 hover:border-pink-600 hover:shadow-2xl hover:shadow-[#5752e5] ease-in-out duration-300 transition-all border-pink-300'
						>
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3 ' />
							</span>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
