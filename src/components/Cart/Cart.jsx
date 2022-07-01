import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./cart.css";

function Cart() {
	const { cart, deleteItem, getItemPrice, emptyCart } =
		useContext(CartContext);
	return (
		<>
			<div className="cart-container">
				{cart.length > 0 ? (
					<section className="cartSection">
						<h5 className="cartTitle">Cart</h5>
						<div className="titlesCart">
							<h3 className="product-title">Product</h3>
							<h3 className="price">Price</h3>
							<h3 className="quantity">Quantity</h3>
							<h3 className="total">Total</h3>
						</div>
						<div className="cart-items">
							{cart.map((item) => {
								return (
									<div className="cart-item" key={item.id}>
										<div className="cart-product">
											<img
												src={item.img}
												alt={item.name}
											/>
											<div>
												<h3>{item.name}</h3>
												<p>{item.description}</p>
												<button
													onClick={() =>
														deleteItem(item.id)
													}
												>
													Remove
												</button>
											</div>
										</div>
										<div className="cart-product-price">
											${item.price}
										</div>
										<div className="cart-product-quantity">
											<div className="count">
												{item.qty}
											</div>
										</div>
										<div className="cart-product-total-price">
											${getItemPrice()}
										</div>
									</div>
								);
							})}
						</div>
						<div className="cart-summary">
							<button
								onClick={() => emptyCart()}
								className="clean-cart"
							>
								Clear cart
							</button>
							<div className="cart-checkout">
								<div className="subtotal">
									<span>Subtotal</span>
									<span>${getItemPrice()}</span>
								</div>
								<p>
									Taxes and shipping calculator at checkout.
								</p>
								<Link to={"/checkout"}>
									<button>Checkout</button>
								</Link>
								<div className="continue-shopping">
									<Link to={"/shop"}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fillRule="#bd9576"
											className="bi bi-arrow-left"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
											/>
										</svg>
										<span>Continue shopping</span>
									</Link>
								</div>
							</div>
						</div>
					</section>
				) : (
					<div className="emptyCart">
						<h5 className="emptyCartTitle">
							Your cart is currently empty.
						</h5>
						<Link to={"/shop"} className="return btnCart">
							Return to the shop section
						</Link>
					</div>
				)}
			</div>
		</>
	);
}
export default Cart;
