import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { CartContext } from "../../context/CartContext";
import "./checkout.css";
export default function Checkout() {
	const { cart, getItemPrice, deleteItem } = useContext(CartContext);

	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [address, setAddress] = useState("");
	const [address2, setAddress2] = useState("");
	const [validation, setValidation] = useState({
		fName: false,
		lName: false,
		address: false,
		email: false,
		phoneNumber: false,
	});
	const [orderId, setOrderId] = useState("");
	const db = getFirestore();
	const orderCollection = collection(db, "orders");
	const emailValidation = () => {
		if (
			/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(
				email
			)
		) {
			setValidation({ ...validation, email: true });
		} else {
			setValidation({ ...validation, email: false });
		}
	};

	const fNameValidation = () => {
		if (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(fName)) {
			setValidation({ ...validation, fName: true });
		} else {
			setValidation({ ...validation, fName: false });
		}
	};
	const lNameValidation = () => {
		if (/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(fName)) {
			setValidation({ ...validation, lName: true });
		} else {
			setValidation({ ...validation, lName: false });
		}
	};

	const phoneNumberValidation = () => {
		if (/^[0-9]+$/.test(phoneNumber) && phoneNumber.length >= 9) {
			setValidation({ ...validation, phoneNumber: true });
		} else {
			setValidation({ ...validation, phoneNumber: false });
		}
	};

	const handleSubmit = () => {
		if (
			validation.fName &&
			validation.lName &&
			validation.email &&
			validation.phoneNumber
		) {
			const order = {
				buyer: { fName, lName, email, address, phoneNumber, address2 },
				items: cart,
				total: getItemPrice(),
			};
			addDoc(orderCollection, order).then(({ id }) => {
				setOrderId(id);
			});
			console.log(order);
			console.log("success");
		} else {
			toast.error("Fill in the fields correctly");
		}
	};

	return (
		<>
			<div className="maincontainer">
				<div className="container">
					<div className="py-5 text-center">
						<h2>Checkout form</h2>
						<p className="lead">
							Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s,
							when an unknown printer took a galley of type and
							scrambled it to make a type specimen book.
						</p>
					</div>
					<div className="row">
						<div className="col-md-4 order-md-2 mb-4">
							<h4 className="d-flex justify-content-between align-items-center mb-3">
								<span className="text-muted">Your cart</span>
							</h4>
							<ul className="list-group mb-3">
								{cart.map((item, index) => {
									return (
										<li
											key={index}
											className="list-group-item d-flex justify-content-between lh-condensed"
										>
											<div>
												<h6 className="my-0">
													x{item.qty} {item.name}
												</h6>
												<small
													className="text-muted remove"
													onClick={() =>
														deleteItem(item.id)
													}
												>
													Remove
												</small>
											</div>
											<span className="text-muted">
												{item.price}
											</span>
										</li>
									);
								})}
								<li className="list-group-item d-flex justify-content-between">
									<span>Total (USD)</span>
									<strong>${getItemPrice()}</strong>
								</li>
							</ul>
						</div>
						<div className="col-md-8 order-md-1">
							<h4 className="mb-3">Billing address</h4>
							<form className="needs-validation">
								<div className="row">
									<div className="col-md-6 mb-3">
										<label>First name</label>
										<input
											type="text"
											name="fName"
											className="form-control col"
											onChange={(e) =>
												setFName(e.target.value)
											}
											onKeyUp={fNameValidation}
										/>
										<div className="invalid-feedback">
											Valid first name is required.
										</div>
									</div>
									<div className="col-md-6 mb-3">
										<label>Last name</label>
										<input
											type="text"
											className="form-control"
											placeholder=""
											onChange={(e) =>
												setLName(e.target.value)
											}
											onKeyUp={lNameValidation}
										/>
										<div className="invalid-feedback">
											Valid last name is required.
										</div>
									</div>
								</div>
								<div className="mb-3">
									<label>Phone number</label>
									<div className="input-group">
										<input
											type="number"
											className="form-control"
											placeholder="+1-555-5555"
											required
											onChange={(e) =>
												setPhoneNumber(e.target.value)
											}
											onKeyUp={phoneNumberValidation}
										/>
										<div className="invalid-feedback">
											Your username is required.
										</div>
									</div>
								</div>
								<div className="mb-3">
									<label>Email </label>
									<input
										type="email"
										className="form-control"
										placeholder="you@example.com"
										onChange={(e) =>
											setEmail(e.target.value)
										}
										onKeyUp={emailValidation}
									/>
									<div className="invalid-feedback">
										Please enter a valid email address for
										shipping updates.
									</div>
								</div>
								<div className="mb-3">
									<label>Address</label>
									<input
										type="text"
										className="form-control"
										placeholder="1234 Main St"
										required
										onChange={(e) =>
											setAddress(e.target.value)
										}
									/>
									<div className="invalid-feedback">
										Please enter your shipping address.
									</div>
								</div>
								<div className="mb-3">
									<label>
										Address 2{" "}
										<span className="text-muted">
											(Optional)
										</span>
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Apartment or suite"
										onChange={(e) =>
											setAddress2(e.target.value)
										}
									/>
								</div>

								<button
									className="btn btn-primary btn-lg btn-block"
									type="button"
									onClick={() => handleSubmit()}
								>
									Continue to checkout
								</button>
								<Toaster
									position="top-center"
									reverseOrder={false}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
