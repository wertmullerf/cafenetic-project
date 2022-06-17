import React from "react";
import "./freatures.css";
import img from "../../images/homeImg.jpg";
function Freatures() {
	return (
		<div className="freatures ">
			<div className="row">
				<div className="col">
					<h3>asperiores.</h3>
				</div>
				<div className="col freaturesImg">
					<img src={img} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Freatures;
