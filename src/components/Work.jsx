import React from "react";
import { data } from "../data/data.js";

const Work = () => {
	return (
		<div name='work' className='w-full h-fit text-gray-300  to-black '>
			<div className='w-full h-full '>
				<div className='mx-auto p-4 flex flex-col justify-center items-center w-full h-fit'>
					<p className='text-7xl font-extralight w-3/5 sm:text-5xl'>Projects</p>
					<div className='border-b-2 border-pink-600 w-3/5 mt-2 sm:w-full'></div>
					<p className='py-8 sm:py-4 text-3xl sm:text-lg'>// Check out some of my recent work</p>
					<div className='grid grid-cols-2 md:grid-cols-2 gap-24 sm:gap-12 mt-24'>
						{data.map((item, index) => (
							<div
								key={index}
								style={{
									backgroundImage: `url(${item.image})`,
								}}
								className='w-[400px] lg:h-[400px] sm:h-fit sm:w-[150px] z-50 transition-all ease-in-out duration-300 shadow-2xl hover:scale-110 shadow-black/75 hover:shadow-[#5752e5] group  rounded-md  justify-center text-center items-center mx-auto content-div '
							>
								<div className='opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-30 flex flex-col justify-center items-center h-full sm:h-fit'>
									<h2 className='text-2xl font bold text-white tracking-wider sm:text-2xl underline underline-offset-4 decoration-1 pt-2'>{item.name}</h2>
									<div className='w-fit px-2 mx-auto mt-2'>
										<p className='text-lg  text-white sm:text-sm font-semibold'>{item.about}</p>
										<p className='text-lg  text-white font-thin sm:text-sm sm:font-semibold mt-2'>Tech Stack:</p>
										<p className='text-lg  text-white font-thin sm:text-sm'>{item.tech}</p>
									</div>
									<div className='pt-2 text-center '>
										<a href={item.github} target='_blank'>
											<button className='text-center sm:text-sm rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-[#5752e5] transition-all duration-300 ease-in-out hover:shadow-white shadow-lg'>
												Code
											</button>
										</a>
										<a href={item.live} target='_blank'>
											<button className='text-center sm:text-sm rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-[#5752e5] transition-all duration-300 ease-in-out hover:shadow-white shadow-lg'>
												Live
											</button>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
