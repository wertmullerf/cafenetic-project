import React from "react";
import "./css/card.css";

const Cards = ({ title1, text1, title2, text2, title3, text3 }) => {
	return (
		<section className="cardSection container">
			<div className="card card1">
				<div className="cardText">
					<strong>{title1}</strong>
					<p>{text1}</p>
				</div>
			</div>
			<div className="card card2">
				<div className="cardText">
					<strong>{title2}</strong>
					<p>{text2}</p>
				</div>
			</div>
			<div className="card card3">
				<div className="cardText">
					<strong>{title3}</strong>
					<p>{text3}</p>
				</div>
			</div>
		</section>
	);
};

export default Cards;
