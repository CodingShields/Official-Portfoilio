import { useState, useEffect } from "react";
import { userDeviceInfo } from "../utilities/utilities";

const SiteWrapper = ({ children, mobile }) => {
    console.log(mobile)
	return <div>{children}</div>;
};

export default SiteWrapper;
