import React from "react";
import { Link } from "react-router-dom";
import Img404 from "../images/Img404.png";
import "./css/errorPage.css";
function ErrorPage() {
	return (
		<div className="errorPage">
			<img src={Img404} alt="Error" />
			<h6>
				Ops... Something has gone wrong or that page no longer exist
			</h6>
			<Link className="return" to={"/"}>
				Please return to the home page
			</Link>
		</div>
	);
}

export default ErrorPage;
