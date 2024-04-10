const Modal = ({ children, isOpen }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className='  absolute top-1/4 left-0 w-full h-full ml-24 mb-24 transition-all duration-500 ease-in-out animate-fadeIn'>
			<div className='flex justify-start items-center h-full w-full'>
				<h1 className='bg-blue-600 bg-opacity-70 font-bold text-white p-4 rounded-lg whitespace-nowrap text-xs '>{children}</h1>
			</div>
		</div>
	);
};

export default Modal;
