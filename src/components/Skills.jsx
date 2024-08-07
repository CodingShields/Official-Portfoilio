import skillsArray from "../assets/images/skillsArray";
const Skills = () => {
	return (
		<div name='skills' className='w-full h-fit  text-gray-300 '>
			<div className='w-full h-full'>
				<div className='p-4 flex flex-col justify-center items-center w-full h-fit'>
					<p className='text-7xl font-extralight w-3/5 sm:text-5xl '>Skills</p>
					<div className='border-b-2 border-pink-600 w-3/5 mt-2 sm:w-full'></div>

					<p className='py-8 sm:py-4 text-3xl sm:text-lg'>// These are the technologies I've worked with</p>

					<div className='w-1/2 grid grid-cols-4  sm:grid-cols-4 gap-6 sm:w-full text-center py-8 sm:gap-2'>
						{skillsArray.map((item, id) => {
							return (
								<div
									key={id}
									className='h-fit w-fit p-4 mx-auto hover:scale-125 duration-500 transition-all ease-in-out  rounded-b-3xl  border-black/50 mx-auto'
								>
									<img src={item.src} alt={item.alt} className='h-24 sm:h-8 mb-2 mx-auto' />
									<p className="sm:text-sm">{item.title}</p>
								</div>
							);
						})}
						{/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={ReactImg} alt='HTML icon' />
						<p className='my-4'>REACT</p>
					</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
