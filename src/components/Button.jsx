import { Link } from "react-scroll";

const Button = ({ children, to, onClick, style, text }) => {
	return (
		<Link to={to} smooth={true} duration={500}>
			<button to={to} onClick={onClick} className={style}>
				{text}
				{children}
			</button>
		</Link>
	);
};

export default Button;
