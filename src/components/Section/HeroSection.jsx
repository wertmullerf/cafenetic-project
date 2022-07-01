import { Link } from "react-router-dom";
import video from "../../video/background2.mp4";
import "./css/heroSection.css";

function HeroSection() {
	return (
		<section className="container hero">
			<video autoPlay loop muted>
				<source src={video} type="video/mp4" />
			</video>
			<strong>subscribe and save 10%</strong>
			<h3>Flavors from Around the World</h3>
			<Link className="buttonHero" to={"/shop"}>
				Shop now
			</Link>
		</section>
	);
}

export default HeroSection;
