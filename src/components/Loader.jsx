import React from "react";
import "./loader.css";
export const Loader = ({ loading }) => {
	// if (loading) {
	// 	<div className="spinner-border" role="status">
	// 		<span className="visually-hidden">Loading...</span>
	// 	</div>;
	// } else {
	// 	alert("Loading es igual a false");
	// }
	return (
		<>
			{loading ? (
				<div class="loader"></div>
			) : (
				<h1>Loading es igual a false</h1>
			)}
		</>
	);
};
