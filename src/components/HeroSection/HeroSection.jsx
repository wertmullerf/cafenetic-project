import React from "react";
import "./HeroSection.css";
import video from "../../video/background2.mp4";
import ButtonHero from "../Button/ButtonHero";

function HeroSection() {
	return (
		<section className="container hero">
			<video autoPlay loop muted>
				<source src={video} type="video/mp4" />
			</video>
			<strong>subscribe and save 10%</strong>
			<h3>Flavors from Around the World</h3>
			<ButtonHero msg="Shop now" />
		</section>
	);
}

export default HeroSection;
