import prinSrc from "../assets/principal.jpg";
import "../styles/home.css";
import { Card } from "../components/Card.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
				<div className="carousel">
					<Carousel
						showThumbs={false}
						centerMode={true}
						centerSlidePercentage={30}
						autoPlay={true}
						infiniteLoop={true}
					>
						{prob.items.map((item) => (
							<div key={item.id} className="carouselIMG">
								<img src={item.img} alt="" />
							</div>
						))}
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export { HomePage };
