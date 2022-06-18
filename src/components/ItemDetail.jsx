import { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import "./ItemDetail.css";
export default function ItemDetail({ productDetail }) {
	const { name, description, img, stock, price } = productDetail;
	let initial = 1;
	const [contador, setContador] = useState(initial);
	const [addToCart, setAddToCart] = useState(false);
	const handleAdd = () =>
		contador < stock
			? setContador(contador + 1)
			: alert("No hay stock disponible");
	const handleSubstract = () =>
		contador > initial
			? setContador(contador - 1)
			: alert("No puedes sacar mas productos");
	const reset = () => setContador(initial);
	const handleAddToCart = () => {
		contador > 0 && contador <= stock
			? setAddToCart(true)
			: setAddToCart(false);
	};
	return (
		<div>
			<div className="productDetailShown container">
				<div className="productDetailText">
					<h3>{name}</h3>
					<p>{description}</p>
					<strong>${price}</strong>
					<p>Products in stock: {stock}</p>
					<ItemCount
						handleAdd={handleAdd}
						handleSubstract={handleSubstract}
						reset={reset}
						handleAddToCart={handleAddToCart}
						stock={stock}
						addToCart={addToCart}
						setAddToCart={setAddToCart}
						contador={contador}
						setContador={setContador}
					/>
				</div>
				<div className="productDetailImg">
					<img src={img} alt="" />
				</div>
			</div>
		</div>
	);
}
