import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
	const { cart } = useContext(CartContext);
	return (
		<div>
			{cart.map((item) => {
				return (
					<div key={item.id}>
						<strong>{item.name}</strong>
						<p>{item.description}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Cart;
