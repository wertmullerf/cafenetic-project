import { Link } from "react-router-dom";
import "./ItemCount.css";
function ItemCount({
	addToCart,
	handleAdd,
	handleSubstract,
	reset,
	handleAddToCart,
	contador,
}) {
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
