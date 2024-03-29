import "../styles/shop.css";
import { Card } from "../components/Card.jsx";

const ShopPage = (prob) => {
	return (
		<div className="ShopContainer">
			{prob.items.map((item) => (
				<Card
					key={item.id}
					item={item}
					items={prob.items}
					setCartItems={prob.setCartItems}
					cartItems={prob.cartItems}
					cartItemID={prob.cartItemID}
					setCartItemID={prob.setCartItemID}
					totalCart={prob.totalCart}
					setTotalCart={prob.setTotalCart}
					numCartItems={prob.numCartItems}
					setNumCartItems={prob.setNumCartItems}
					type="shop"
				/>
			))}
		</div>
	);
};

export { ShopPage };
