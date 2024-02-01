import { Link } from "react-router-dom";
import { AlertIcon } from "./assets/icons";
import "./styles/error.css";
const ErrorPage = () => {
	return (
		<div className="error">
			<AlertIcon />
			<h1>Ops! something unexpected happens</h1>
			<Link to="home">Go back to the home page</Link>
		</div>
	);
};

export default ErrorPage;
