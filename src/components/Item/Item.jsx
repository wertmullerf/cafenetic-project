import { Link } from "react-router-dom";
import "./item.css";

function Item({ item }) {
	const { name, price, img, id } = item;
	return (
		<>
			<Link style={{ textDecoration: "none" }} to={`/item/${id}`}>
				<div className="productsList">
					<img src={img} alt="" />
					<h6>{name}</h6>
					<span className="d-flex justify-content-center">
						${price}
					</span>

					<strong className="btnItem" to={`/item/${id}`}>
						Select more options
					</strong>
				</div>
			</Link>
		</>
	);
}

export default Item;
