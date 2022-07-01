import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../Item/ItemDetail";
function ItemDetailContainer() {
	const [productDetail, setProductDetail] = useState();
	const [loading, setLoading] = useState(true);
	const { idProducto } = useParams();

	useEffect(() => {
		const db = getFirestore();
		const productRef = doc(db, "items", idProducto);
		getDoc(productRef)
			.then((snapshot) => {
				setProductDetail({ ...snapshot.data(), id: snapshot.id });
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [idProducto]);
	return (
		<div>
			{loading && (
				<div className="loading">
					<div className="progress-loader">
						<div className="progress"></div>
					</div>
				</div>
			)}
			{productDetail && <ItemDetail productDetail={productDetail} />}
		</div>
	);
}

export default ItemDetailContainer;
