import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./cart.css";
import Item from "./Item";

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
											${item.price * item.qty}
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
								<button>Checkout</button>
								<div className="continue-shopping">
									<Link to={"/shop"}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="#bd9576"
											class="bi bi-arrow-left"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
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

//coupon
{
	/* <div className="col-lg-4 col-md-6">
												<div className="discount-code-wrapper">
													<div className="title-wrap">
														<h4 className="cart-bottom-title section-bg-gray">
															Use Coupon Code
														</h4>
													</div>
													<div className="discount-code">
														<p>
															Enter your coupon
															code if you have
															one.
														</p>
														<form>
															<input
																type="text"
																required=""
																name="name"
															/>
															<button
																className="cart-btn-2"
																type="submit"
															>
																Apply Coupon
															</button>
														</form>
													</div>
												</div>
											</div> */
}
// <table className="productsTable">
// 	<tr className="productsTypes">
// 		<th>Product</th>
// 		<th>Price</th>
// 		<th>Quantity</th>
// 		<th>Subtotal</th>
// 	</tr>

// 	{cart.map((item) => {
// 		return (
// 			<>
// 				<tbody className="productList">
// 					<tr key={item}>
// 						<td className="imgTable">
// 							<img
// 								style={{
// 									height: "200px",
// 									width: "200px",
// 									objectFit: "cover",
// 								}}
// 								src={item.img}
// 								alt={item.name}
// 							/>
// 							<span>{item.name}</span>
// 						</td>
// 						<td>{item.price}$</td>
// 						<td>{item.qty}</td>
// 						<td>{item.price * item.qty}$</td>
// 						<svg
// 							xmlns="http://www.w3.org/2000/svg"
// 							width="18"
// 							height="18"
// 							fill="white"
// 							className="delete bi bi-x-circle"
// 							viewBox="0 0 16 16"
// 							onClick={() =>
// 								deleteItem(item.id)
// 							}
// 						>
// 							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
// 							<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
// 						</svg>
// 					</tr>
// 				</tbody>
// 				<br />
// 			</>
// 		);
// 	})}
// </table>
