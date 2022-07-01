import { Link } from "react-router-dom";
import ItemListContainer from "../components/Containers/ItemListContainer";
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
