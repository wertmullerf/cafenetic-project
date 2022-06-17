// import ItemCount from '../ItemCount/ItemCount';
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemList from "../ItemList";
import "./ItemListContainer.css";
const coffeesList = [
	{
		id: "0",
		name: "Classic beans",
		category: "coffee",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 50,
		img: "https://i.ibb.co/qnNNsqg/first-Product.png",
		stock: 30,
	},
	{
		id: "1",
		name: "Heavy beans",
		category: "coldbrew",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 45,
		img: "https://i.ibb.co/ZxmFx0g/second-Product.png",
		stock: 5,
	},
	{
		id: "2",
		name: "Sweet beans",
		category: "decaf",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 20,
		img: "https://i.ibb.co/YbyNdH0/third-Product.png",
		stock: 10,
	},
	{
		id: "3",
		name: "Light beans",
		category: "decaf ",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 30,
		img: "https://i.ibb.co/YbyNdH0/third-Product.png",
		stock: 3,
	},
	{
		id: "4",
		name: "Cafenetic giftcard",
		category: "gifs",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 25,
		img: "https://i.ibb.co/xMcbK2k/giftCard.png",
		stock: 600,
	},
	{
		id: "5",
		name: "Heavy beans",
		category: "gifs ",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 45,
		img: "https://i.ibb.co/ZxmFx0g/second-Product.png",
		stock: 5,
	},
	{
		id: "6",
		name: "Cafenetic giftcard V2",
		category: "gifs",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 50,
		img: "https://i.ibb.co/hdQnK8t/second-Gift-Card.png",
		stock: 700,
	},
	{
		id: "7",
		name: "Cafenetic giftcard V2",
		category: "gifs",
		description:
			"Is simply dummy text of the printing and typesetting industry.",
		price: 50,
		img: "https://i.ibb.co/xMcbK2k/giftCard.png",
		stock: 700,
	},
];
export default function ItemListContainer() {
	const [items, setItems] = useState();
	const [resultado, setResultado] = useState([]);
	const { categoryId } = useParams();
	const categories = ["coffee", "decaf", "coldbrew", "gifs"];
	useEffect(() => {
		setResultado(categoryId);
	}, [categoryId]);

	useEffect(() => {
		const productsPromise = new Promise((resolve, reject) => {
			!categoryId //CONDICION: SI NO HAY CATEGORIA, ENTONCES MOSTRAR TODOS LOS PRODUCTOS
				? resolve(coffeesList)
				: resolve(
						coffeesList.filter(
							(item) => item.category === categoryId
						)
				  );
		}, 2000);
		productsPromise
			.then((result) => {
				setItems(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [categoryId]);

	return (
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
	);
}

// <div className="itemCount">
//     <ItemCount stock={6} initial={1} onAdd={onAdd}/>
// </div>
// const onAdd = (contador) =>{
//    alert(`Pudiste agregar ${contador} productos`)
// }
