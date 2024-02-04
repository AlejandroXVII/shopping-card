import prinSrc from "../assets/principal.jpg";
import "../styles/home.css";
import { Card } from "../components/Card.jsx";

const HomePage = (prob) => {
	return (
		<div className="flexor">
			<div className="homeContainer container">
				<h1>Your one-stop destination for all your shopping needs</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus sagittis dui leo. Duis lobortis hendrerit tempus.
					Vivamus rhoncus facilisis finibus. Vestibulum porta sit amet
					nibh quis blandit. Orci varius natoque penatibus et magnis
					dis parturient montes, nascetur ridiculus mus. Etiam finibus
					tellus vel nisl porttitor.
				</p>
				<button>Show now</button>
				<img src={prinSrc} alt="" />
				<div className="ShopContainer">
					{prob.items.map((item) => (
						<Card key={item.id} item={item} type="home" />
					))}
				</div>
			</div>
		</div>
	);
};

export { HomePage };
