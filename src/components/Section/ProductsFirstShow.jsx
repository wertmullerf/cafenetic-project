import { Link } from "react-router-dom";
import "./css/productsFirstShow.css";

function ProductsFirstShow() {
	return (
		<section className="productsFirstShow">
			<div className="title">
				<strong>Our Coffee</strong>
				<p>
					Discover our selection of with organic, sustainably-sourced
					coffee
				</p>
			</div>
			<div className="productsShown">
				<Link to={"/shop"}>
					<img
						src="https://live.staticflickr.com/65535/52161552670_f19a1504bf_b.jpg"
						alt=""
					/>
					<img
						src="https://live.staticflickr.com/65535/52161302524_2f9f23947c_b.jpg"
						alt=""
					/>
					<img
						src="https://live.staticflickr.com/65535/52160045872_0cd970eb2c_b.jpg"
						alt=""
					/>
				</Link>
			</div>
			<Link as={Link} to="/shop" className="link">
				Go to the shop
			</Link>
		</section>
	);
}

export default ProductsFirstShow;
