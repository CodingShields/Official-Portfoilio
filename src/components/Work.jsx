import React from "react";
import { data } from "../data/data.js";

const Work = () => {
	// projects file
	const project = data;
	//setProject(data);

	return (
		<div name='work' className='w-full md:h-screen text-gray-300 bg-gradient-to-l from-[#0a192f] to-black '>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
					<p className='py-6 text-2xl'>// Check out some of my recent work</p>
				</div>

				{/* container for projects */}
				<div className='grid sm:grid-cols-2 md:grid-cols-2 gap-36'>
					{/* Gird Item */}
					{project.map((item, index) => (
						<div
							key={index}
							style={{
								backgroundImage: `url(${item.image})`,
							}}
							className='w-[500px] h-[500px] z-50 transition-all ease-in-out duration-300 shadow-2xl hover:scale-125 shadow-black/75 hover:shadow-[#5752e5] group  rounded-md  justify-center text-center items-center mx-auto content-div '
						>
							{/* Hover effect for images */}
							<div className='opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out z-30 flex flex-col justify-center items-center h-full'>
								<h2 className='text-2xl font bold text-white tracking-wider pt-2'>{item.name}</h2>
								<div className='w-fit px-2 mx-auto mt-2'>
									<p className='text-lg  text-white font-thin '>{item.about}</p>
								</div>
								<div className='pt-2 text-center '>
									{/* eslint-disable-next-line */}
									<a href={item.github} target='_blank'>
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-[#5752e5] transition-all duration-300 ease-in-out hover:shadow-white shadow-lg'>
											Code
										</button>
									</a>
									{/* eslint-disable-next-line */}
									<a href={item.live} target='_blank'>
										<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:text-white hover:bg-[#5752e5] transition-all duration-300 ease-in-out hover:shadow-white shadow-lg'>
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
	);
};

export default Work;
