import Item from "./Item";
export default function ItemList({ items }) {
	return (
		<div className="d-flex justify-content-center flex-wrap">
			{items?.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
}
