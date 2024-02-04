import "../styles/card.css";
import { useState } from "react";

const Card = (prob) => {
	const [amount, setAmount] = useState(1);
	function addItemToTheCart(e) {
		const cartItemID = prob.cartItemID;
		const id = Number(e.target.id);
		let itemToAdd = prob.items.find((item) => item.id === id);
		prob.setCartItems([
			...prob.cartItems,
			{ ...itemToAdd, amount, cartItemID },
		]);
		prob.setCartItemID(prob.cartItemID + 1);
		prob.setNumCartItems(prob.numCartItems + amount);
		prob.setTotalCart(prob.totalCart + itemToAdd.price * amount);
	}
	return (
		<div className="itemCard">
			<div className="imgContainer">
				<img src={prob.item.img} alt="" />
				{prob.type === "shop" ? (
					<p className="price">{"$" + prob.item.price}</p>
				) : prob.type === "cart" ? (
					<p className="price">
						{prob.item.amount +
							"pcs total $" +
							prob.item.price * prob.item.amount}
					</p>
				) : null}
			</div>
			<div className="infoContainer">
				<p className="title">{prob.item.title}</p>
			</div>
			<div className="actionContainer">
				{prob.type === "shop" ? (
					<ShopButtons
						item={prob.item}
						amount={amount}
						setAmount={setAmount}
						addItemToTheCart={addItemToTheCart}
					/>
				) : prob.type === "cart" ? (
					<CartButtons
						item={prob.item}
						cartItems={prob.cartItems}
						setCartItems={prob.setCartItems}
						totalCart={prob.totalCart}
						setTotalCart={prob.setTotalCart}
						numCartItems={prob.numCartItems}
						setNumCartItems={prob.setNumCartItems}
					/>
				) : null}
			</div>
		</div>
	);
};

const ShopButtons = (prob) => {
	const [click, setClick] = useState(false);
	return (
		<>
			{click ? (
				<>
					{prob.amount < 2 ? null : (
						<button
							className="addButton"
							onClick={() => {
								prob.setAmount(prob.amount - 1);
							}}
						>
							{"<"}
						</button>
					)}
					<input
						type="text"
						value={prob.amount}
						name="amount"
						onChange={(e) => prob.setAmount(e.target.value)}
					/>
					<button
						className="addButton"
						onClick={() => {
							prob.setAmount(prob.amount + 1);
						}}
					>
						{">"}
					</button>
					<button
						className="cancel"
						onClick={() => {
							setClick(false);
							prob.setAmount(1);
						}}
					>
						X
					</button>
					<button
						className="addToCart "
						onClick={(e) => prob.addItemToTheCart(e)}
						id={prob.item.id}
					>
						Add
					</button>
				</>
			) : (
				<button
					onClick={() => {
						setClick(true);
					}}
				>
					Add to the Cart
				</button>
			)}
		</>
	);
};

const CartButtons = (prob) => {
	function removeItemToTheCart(e) {
		const item = prob.cartItems.find(
			(item) => Number(e.target.id) === item.cartItemID
		);
		console.log(item);
		prob.setCartItems(
			prob.cartItems.filter(
				(item) => Number(e.target.id) !== item.cartItemID
			)
		);
		prob.setNumCartItems(prob.numCartItems - item.amount);
		prob.setTotalCart(prob.totalCart - item.price * item.amount);
	}
	return (
		<>
			<button onClick={removeItemToTheCart} id={prob.item.cartItemID}>
				Remove to cart
			</button>
		</>
	);
};

export { Card };
