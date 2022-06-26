import { Link } from "react-router-dom";
import "./ItemCount.css";
import { Toaster, toast } from "react-hot-toast";
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
						<strong style={{ fontSize: "1.3rem" }} className="m-2">
							{contador}
						</strong>
						<button className="btn btn-light" onClick={handleAdd}>
							+
						</button>

						<button
							className="addToCartBtn"
							onClick={() => handleAddToCart()}
						>
							Add to cart
						</button>
					</>
				)}

				{addToCart && (
					<>
						<Link
							className="d-block mt-3 text-decoration-none h6 goToCart"
							to={"/cart"}
						>
							Go to the cart
						</Link>
					</>
				)}
			</div>
		</>
	);
}

export default ItemCount;
