import { useState, useEffect } from "react";
import { userDeviceInfo } from "./utilities/utilities";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import SiteWrapper from "./components/SiteWrapper";
function App() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
			<SiteWrapper mobile={isMobile}>
				<Home />
				<About />
				<Skills />
				<Work />
				<Contact />
			</SiteWrapper>
	);
}

export default App;
