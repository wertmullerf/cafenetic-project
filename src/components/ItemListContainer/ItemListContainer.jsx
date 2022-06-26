// import ItemCount from '../ItemCount/ItemCount';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemList from "../ItemList";
import "./ItemListContainer.css";
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";
// const coffeesList = [
// 	{
// 		id: "0",
// 		name: "Classic beans",
// 		category: "coffee",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 50,
// 		img: "https://live.staticflickr.com/65535/52161552670_f19a1504bf_b.jpg",
// 		stock: 30,
// 	},
// 	{
// 		id: "1",
// 		name: "Heavy beans",
// 		category: "coldbrew",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 45,
// 		img: "https://live.staticflickr.com/65535/52161068523_0aa6ce41ac_b.jpg",
// 		stock: 5,
// 	},
// 	{
// 		id: "2",
// 		name: "Sweet beans",
// 		category: "decaf",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 20,
// 		img: "https://live.staticflickr.com/65535/52161552530_bca61e961c_b.jpg",
// 		stock: 10,
// 	},
// 	{
// 		id: "3",
// 		name: "Light beans",
// 		category: "decaf ",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 30,
// 		img: "https://live.staticflickr.com/65535/52161302524_2f9f23947c_b.jpg",
// 		stock: 3,
// 	},
// 	{
// 		id: "4",
// 		name: "Cafenetic giftcard",
// 		category: "gifs",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 25,
// 		img: "https://live.staticflickr.com/65535/52160045872_0cd970eb2c_b.jpg",
// 		stock: 600,
// 	},
// 	{
// 		id: "5",
// 		name: "Heavy beans",
// 		category: "gifs ",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 45,
// 		img: "https://live.staticflickr.com/65535/52160045872_0cd970eb2c_b.jpg",
// 		stock: 5,
// 	},
// 	{
// 		id: "6",
// 		name: "Cafenetic giftcard V2",
// 		category: "gifs",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 50,
// 		img: "https://live.staticflickr.com/65535/52161066806_14ebae7c80_b.jpg",
// 		stock: 700,
// 	},
// 	{
// 		id: "7",
// 		name: "Cafenetic giftcard V2",
// 		category: "gifs",
// 		description:
// 			"Is simply dummy text of the printing and typesetting industry.",
// 		price: 50,
// 		img: "https://live.staticflickr.com/65535/52161066776_2022a7fcca_b.jpg",
// 		stock: 700,
// 	},
// ];
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
