import { useState, useEffect } from "react";
import { userDeviceInfo } from "../utilities/utilities";

const SiteWrapper = ({ children, mobile }) => {
    console.log(mobile)
	return <div className='bg-gradient-to-l from-[#0a192f] to-black h-screen w-full space-y-12'>{children}</div>;
};

export default SiteWrapper;
