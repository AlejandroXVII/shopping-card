import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

const App = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

export default App;
