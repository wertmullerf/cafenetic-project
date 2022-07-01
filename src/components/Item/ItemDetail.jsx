import { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import "./itemDetail.css";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

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
			: toast.error("There is no more stock");
	//RESTA 1 AL CONTADOR
	const handleSubstract = () =>
		contador > initial
			? setContador(contador - 1)
			: toast("You can't substract from 0", {
					icon: "😡",
			  });
	//RESET
	const reset = () => setContador(initial);

	const handleAddToCart = () => {
		if (contador > 0 && contador <= stock) {
			toast.success("Product added to the cart");
			setAddToCart(true);

			isInCart(productDetail.id); //Metodo SOME - ItemDetail - Detecta el producto que se va agregar ya fue agreagado. Devuelve un boolean
			addItem(productDetail, contador);
		}
	};

	return (
		<div>
			<div className="productDetailShown container">
				<div className="productDetailImg">
					<img src={img} alt="" />
				</div>
				<div className="productDetailText">
					<h3>{name}</h3>
					<strong>${price}</strong>
					<p>{description}</p>
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
				<Toaster position="top-center" reverseOrder={false} />
			</div>
		</div>
	);
}
