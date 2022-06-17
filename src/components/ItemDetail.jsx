import React from "react";
import "./ItemDetail.css";
export default function ItemDetail({ productDetail }) {
	const { name, description, img, stock, price } = productDetail;
	return (
		<div>
			<div className="productDetailShown container">
				<div className="productDetailText">
					<h3>{name}</h3>
					<p>{description}</p>
					<strong>${price}</strong>
					<p>Products in stock: {stock}</p>
				</div>
				<div className="productDetailImg">
					<img src={img} alt="" />
				</div>
			</div>
		</div>
	);
}
