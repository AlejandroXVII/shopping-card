import { Card } from "../components/Card.jsx";

const CartPage = (prob) => {
	return (
		<div className="CartContainer ShopContainer">
			{prob.cartItems.length > 0 ? (
				<>
					<div className="paymentContainer">
						<h1>Payment</h1>
						<p>Total: ${prob.totalCart.toFixed(2)}</p>
						<p>Number items: {prob.numCartItems}</p>
						<button>Pay</button>
					</div>
					{prob.cartItems.map((item) => (
						<Card
							key={item.cartItemID}
							item={item}
							cartItems={prob.cartItems}
							setCartItems={prob.setCartItems}
							totalCart={prob.totalCart}
							setTotalCart={prob.setTotalCart}
							numCartItems={prob.numCartItems}
							setNumCartItems={prob.setNumCartItems}
							type="cart"
						/>
					))}
				</>
			) : (
				<h1 className="error">There is not anything in the cart</h1>
			)}
		</div>
	);
};

export { CartPage };
