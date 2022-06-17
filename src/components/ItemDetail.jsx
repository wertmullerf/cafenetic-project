import React from "react";
import "./ItemDetail.css";
import ItemCount from "./ItemCount/ItemCount";
export default function ItemDetail({ productDetail }) {
	const { name, description, img, stock, price } = productDetail;
	// const onAdd = (contador) => {
	// 	alert(`Pudiste agregar ${contador} productos`);
	// };
	return (
		<div>
			<div className="productDetailShown container">
				<div className="productDetailText">
					<h3>{name}</h3>
					<p>{description}</p>
					<strong>${price}</strong>
					<p>Products in stock: {stock}</p>
					<ItemCount stock={stock} initial={1} />
				</div>
				<div className="productDetailImg">
					<img src={img} alt="" />
				</div>
			</div>
		</div>
	);
}
