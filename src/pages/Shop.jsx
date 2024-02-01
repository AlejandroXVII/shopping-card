import "../styles/shop.css";

const ShopPage = (prob) => {
	return (
		<div className="ShopContainer">
			{prob.items.map((item) => (
				<Card key={item.id} item={item} />
			))}
		</div>
	);
};

const Card = (prob) => {
	return (
		<div className="itemCard">
			<div className="imgContainer">
				<img src={prob.item.img} alt="" />
			</div>
			<div className="infoContainer">
				<p className="title">{prob.item.title}</p>
				<p className="price">{"$" + prob.item.price}</p>
			</div>
			<div className="actionContainer">
				<button>Add to the Cart</button>
			</div>
		</div>
	);
};
export { ShopPage };
