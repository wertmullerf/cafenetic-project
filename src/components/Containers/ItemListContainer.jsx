// import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../Item/ItemList";
import "./ItemListContainer.css";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
export default function ItemListContainer() {
	const [items, setItems] = useState();
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();
	const categories = ["coffee", "decaf", "coldbrew", "gifs"];
	useEffect(() => {
		const db = getFirestore();
		const productsCollection = collection(db, "items");
		if (categoryId) {
			const q = query(
				productsCollection,
				where("category", "==", categoryId)
			);
			getDocs(q)
				.then((snapshot) => {
					setItems(
						snapshot.docs.map((doc) => ({
							...doc.data(),
							id: doc.id,
						}))
					);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
				});
		} else {
			getDocs(productsCollection)
				.then((snapshot) => {
					setItems(
						snapshot.docs.map((doc) => ({
							...doc.data(),
							id: doc.id,
						}))
					);
				})
				.catch((error) => {
					console.log(error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	}, [categoryId]);

	return (
		<>
			{loading ? (
				<div className="loading">
					<div className="progress-loader">
						<div className="progress"></div>
					</div>
				</div>
			) : (
				<div className="productsPage">
					<h6 className="shopTitle">Shop</h6>
					<div className="categories">
						{categories &&
							categories?.map((category, index) => {
								return (
									<li key={index}>
										<Link
											className="linkCategory"
											to={`/shop/${category}`}
										>
											{category}
										</Link>
									</li>
								);
							})}
					</div>

					<ItemList items={items} />
				</div>
			)}
		</>
	);
}
