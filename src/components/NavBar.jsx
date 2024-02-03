import { ShopIcon, CartIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="navigationBar">
			<div>
				<ShopIcon />
				<h1>Shoppedia</h1>
			</div>
			<nav>
				<Link to="home">
					<button>Home</button>
				</Link>
				<Link to="shop">
					<button>Shop</button>
				</Link>
				<Link to="about">
					<button>About</button>
				</Link>
			</nav>
			<Link to="cart">
				<button>
					<CartIcon />
				</button>
			</Link>
		</div>
	);
};

export { NavBar };
