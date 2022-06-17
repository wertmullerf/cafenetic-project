import { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";
function ItemCount({ stock, initial }) {
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
			? setAddToCart(true) && alert("Producto agregado al carrito")
			: setAddToCart(false);
	};
	return (
		<>
			<div className="product">
				{addToCart === false && (
					<>
						<button
							className="btn btn-light"
							onClick={handleSubstract}
						>
							-
						</button>
						<strong className="m-2">{contador}</strong>
						<button className="btn btn-light" onClick={handleAdd}>
							+
						</button>
						<button
							className="btn btn-success"
							onClick={() => handleAddToCart()}
						>
							Agregar al carrito
						</button>
						<button className="btn btn-danger" onClick={reset}>
							Reiniciar
						</button>
					</>
				)}

				{addToCart && (
					<>
						<Link
							className="d-block mt-3 text-decoration-none text-white h6"
							to={"/cart"}
						>
							Go to the cart
						</Link>
						{alert("Producto agregado al carrito")}
					</>
				)}
			</div>
		</>
	);
}

export default ItemCount;
