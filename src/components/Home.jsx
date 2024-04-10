import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import bg from "../assets/bg.mp4";
const Home = () => {
	const [active, setActive] = useState(false);

	const [activeBanner, setActiveBanner] = useState(false);

	useEffect(() => {
		const timer = () => {
			setTimeout(() => {
				setActiveBanner(!activeBanner);
			}, 5000);
		};
		timer();
	}, [activeBanner]);

	const handleMouseOver = () => {
		setActive(true);
	};

	const handleMouseOut = () => {
		setActive(false);
	};

	return (
		<div name='home' className='w-full h-screen bg-gradient-to-l from-[#0a192f] to-black overscroll-none'>
			{/* Container */}{" "}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
				<div
					className={
						activeBanner
							? "text-xl font-bold text-[#ccd6f6] animate-fadeIn duration-700 transition-all ease-in-out inline-flex "
							: "animate-fadeOut duration-700 transition-all ease-in-out inline-flex"
					}
				>
					<h1>This Portfolio was made with Tailwind CSS ...hover and click around</h1>
					<h1 className='animate-bounce mx-2 text-3xl'>🤗</h1>
				</div>
				<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
					<video
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
						className={
							active
								? "w-11/12 object-cover absolute right-0  h-[650px] rounded-l-full animate-fadeOut transition-all my-8"
								: "w-11/12 object-cover absolute right-0 h-[650px] my-8 rounded-l-full animate-fadeIn shadow-lg shadow-[#5752e5]"
						}
						autoPlay
						loop
						muted
						src={bg}
						type='video/mp4'
					/>
				</div>
				<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='z-10 group mt-12 w-full '>
					<p className='text-pink-600 text-xl animate-bounce group-hover:animate-none transition-all ease-in-out duration-300 font-semibold w-full'>
						Hi, my name is
					</p>
					<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>Mikey Shields</h1>
					<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] '>I'm a Front End Developer.</h2>
					<div className=' group-hover:my-12 group-hover:bg-slate-500 rounded-full transition-all ease-in-out group-hover:delay-200 duration-700 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-pink-600'>
						<p className='text-white py-2 max-w-[700px] text-xl  group-hover:text-[28px] bg-opacity-80 ml-20 px-4  text-left  my-4 transition-all ease-in-out duration-500'>
							I’m a Front-End developer specializing in building designing exceptional digital experiences. Currently, I’m focused on building
							customize responsive web applications. Passionate about serverless architecture, cloud computing, and beautiful UI/UX.
						</p>
					</div>

					<div className='transition-all ease-in-out duration-700 cursor-pointer group-hover:py-8'>
						<Link
							to='work'
							smooth={true}
							duration={500}
							className='text-white group border-2 px-6 py-3 my-2 flex w-fit items-center bg-pink-600 hover:border-pink-600 hover:shadow-2xl hover:shadow-[#5752e5] ease-in-out duration-300 transition-all border-pink-300'
						>
							View Work
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3 ' />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
