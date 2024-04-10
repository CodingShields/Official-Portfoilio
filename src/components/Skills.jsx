import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import vite from "../assets/vite.svg";
import nextjs from "../assets/nextjs.png";
import zustand from "../assets/zustand.png";
import ts from "../assets/ts.png";
const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen bg-gradient-to-l from-[#0a192f] to-black  text-gray-300'>
			{/* Container */}
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
					<p className='py-4'>// These are the technologies I've worked with</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8'>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={ReactImg} alt='HTML icon' />
						<p className='my-4'>REACT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={JavaScript} alt='HTML icon' />
						<p className='my-4'>JAVASCRIPT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2 ' src={ts} alt='HTML icon' />
						<p className='my-4'>TYPESCRIPT</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={nextjs} alt='HTML icon' />
						<p className='my-4'>NEXT.JS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={HTML} alt='HTML icon' />
						<p className='my-4'>HTML</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={CSS} alt='HTML icon' />
						<p className='my-4'>CSS</p>
					</div>

					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={GitHub} alt='HTML icon' />
						<p className='my-4'>GITHUB</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={Node} alt='HTML icon' />
						<p className='my-4'>NODE JS</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={Mongo} alt='HTML icon' />
						<p className='my-4'>MONGO DB</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={Tailwind} alt='HTML icon' />
						<p className='my-4'>TAILWIND</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={FireBase} alt='HTML icon' />
						<p className='my-4'>FIREBASE</p>
					</div>
					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={vite} alt='HTML icon' />
						<p className='my-4'>VITE</p>
					</div>

					<div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-md hover:shadow-white'>
						<img className='h-24 mx-auto py-2' src={zustand} alt='HTML icon' />
						<p className='my-4'>ZUSTAND</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
