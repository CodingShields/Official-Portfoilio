const About = () => {
	return (
		<div name='about' className='w-full h-screen bg-gradient-to-l from-[#0a192f] to-black  text-gray-300'>
			<div className='w-full h-full '>
				<div className='w-full h-fit flex flex-col justify-center items-center tracking-widest'>
					<p className='text-7xl sm:text-5xl font-extralight w-3/5  '>About</p>
					<div className='border-b-2 border-pink-600 w-3/5 mt-2 sm:w-full'></div>
					<p className='text-5xl sm:text-3xl font-extralight text-pink-600 w-1/2 mt-4 sm:w-10/12'>
						Hello!{" "}
						<p className='text-4xl  sm:text-2xl  sm:text-center text-white indent-10 py-2 w-1/2 sm:w-10/12'>
							My Name is Mikey Shields, nice to meet you!
						</p>
					</p>
					<p className='text-4xl sm:text-2xl font-extralight leading-[74px] my-4 w-3/4 sm:w-3/4'>
						I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for
						clients ranging from individuals and small businesses all the way to large enterprise corporations.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
