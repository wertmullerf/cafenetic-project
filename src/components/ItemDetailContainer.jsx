import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
function ItemDetailContainer() {
	const [productDetail, setProductDetail] = useState();
	const { idProducto } = useParams();

	useEffect(() => {
		const getDetail = () => {
			fetch("../../products.json")
				.then((res) => res.json())
				.then((productos) => {
					setProductDetail(
						productos.find((producto) => producto.id === idProducto)
					);
					console.log(productDetail);
				})
				.catch((err) => console.log(err));
			console.log(productDetail);
		};
		getDetail();
	}, [idProducto]);
	return (
		<div>
			{productDetail ? (
				<ItemDetail productDetail={productDetail} />
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}

export default ItemDetailContainer;
