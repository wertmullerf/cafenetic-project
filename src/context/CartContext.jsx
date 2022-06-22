import { createContext, useState } from "react";

export const CartContext = createContext({});
const { Provider } = CartContext;
const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	//ItemDetail - Se encarga de agreagr el producto al carrito, si ya fue agregado se suma la qty.
	const addItem = (item, qty) => {
		const newItem = {
			...item,
			qty,
		};
		if (isInCart(newItem.id)) {
			const findProduct = cart.find((x) => x.id === newItem.id);
			const productIndex = cart.indexOf(findProduct);
			const auxArray = [...cart];
			auxArray[productIndex].qty += qty;
			setCart(auxArray);
		} else {
			setCart([...cart, newItem]);
		}
	};

	//Metodo SOME - ItemDetail - Detecta el producto que se va agregar ya fue agreagado. Devuelve un boolean
	const isInCart = (id) => {
		return cart?.some((item) => item.id === id);
	};

	//Vaciar carrito - Cart - Button
	const emptyCart = () => {
		setCart([]);
	};

	//Metodo Filter - Cart - Se encarga, en funcion del ID, de retornar un nuevo array sin el producto seleccionado.
	const deleteItem = (id) => {
		return setCart(cart.filter((x) => x.id !== id));
	};

	//Metodo Reduce - CartWidget - Se encarga retornar la cantidad de productos que hay en el carrito.
	const getItemQty = () => {
		return cart.reduce((acc, x) => acc + x.qty, 0);
	};

	//Metodo Reduce - Cart - Se encarga retornar el precio total de productos que hay en el carrito.
	const getItemPrice = () => {
		return cart.reduce((acc, x) => (acc += x.price * x.qty), 0);
	};

	return (
		<Provider
			value={{
				cart,
				isInCart,
				addItem,
				emptyCart,
				deleteItem,
				getItemPrice,
				getItemQty,
			}}
		>
			{children}
		</Provider>
	);
};

export default CartContextProvider;
