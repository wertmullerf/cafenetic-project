import Item from "./Item";

export default function ItemList({ items }) {
	return (
		<div className="d-flex itemList align-items-sm-start justify-content-center flex-wrap">
			{items?.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
}
