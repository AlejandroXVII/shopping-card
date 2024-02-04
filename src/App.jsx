import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

const App = (prob) => {
	return (
		<>
			<NavBar numCartItems={prob.numCartItems} />
			<Outlet />
		</>
	);
};

export default App;
