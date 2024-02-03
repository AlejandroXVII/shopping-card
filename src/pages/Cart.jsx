import { Card } from "../components/Card.jsx";

const CartPage = (prob) => {
	return (
		<div className="CartContainer">
			{prob.cartItems.map((item) => (
				<Card
					key={item.cartItemID}
					item={item}
					cartItems={prob.cartItems}
					setCartItems={prob.setCartItems}
					type="cart"
				/>
			))}
		</div>
	);
};

export { CartPage };
