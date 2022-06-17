import { Link } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import "./css/productsPage.css";
function Products() {
	return (
		<>
			<div className="productsPage">
				<ItemListContainer />
			</div>
		</>
	);
}

export default Products;
