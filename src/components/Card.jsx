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
		//console.log(prob.cartItems[prob.cartItems.length - 1].cartItemID);
	}
	return (
		<div className="itemCard">
			<div className="imgContainer">
				<img src={prob.item.img} alt="" />
				<p className="price">{"$" + prob.item.price}</p>
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
				) : (
					<CartButtons
						item={prob.item}
						cartItems={prob.cartItems}
						setCartItems={prob.setCartItems}
					/>
				)}
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
		console.log(prob.cartItems);
		prob.setCartItems(
			prob.cartItems.filter((item) => e.target.id !== item.cartItemID)
		);
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
