import { useContext, useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import "./ItemDetail.css";
export default function ItemDetail({ productDetail }) {
	const { name, description, img, stock, price } = productDetail;
	let initial = 1;
	const { isInCart, addItem } = useContext(CartContext);
	const [contador, setContador] = useState(initial);
	const [addToCart, setAddToCart] = useState(false);
	//AGREGA 1 AL CONTADOR
	const handleAdd = () =>
		contador < stock
			? setContador(contador + 1)
			: alert("No hay stock disponible");
	//RESTA 1 AL CONTADOR
	const handleSubstract = () =>
		contador > initial
			? setContador(contador - 1)
			: alert("No puedes sacar mas productos");
	//RESET
	const reset = () => setContador(initial);

	const handleAddToCart = () => {
		if (contador > 0 && contador <= stock) {
			setAddToCart(true);
			isInCart(productDetail.id); //Metodo SOME - ItemDetail - Detecta el producto que se va agregar ya fue agreagado. Devuelve un boolean
			addItem(productDetail, contador);
		}
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
