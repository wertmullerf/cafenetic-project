import { createContext, useState } from "react";

export const CartContext = createContext({});
const { Provider } = CartContext;
const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState();
	//Metodo SOME - ItemDetail - Detecta el producto que se va agregar ya fue agreagado. Devuelve un boolean
	const isInCart = (id) => {
		return cart.some((item) => item.id === id);
	};
	//ItemDetail - Se encarga de agreagr el producto al carrito, si ya fue agregado se suma la qty.
	const addItem = () => {};

	//Vaciar carrito - Cart - Button
	const emptyCart = () => {};

	//Metodo Filter - Cart - Se encarga, en funcion del ID, de retornar un nuevo array sin el producto seleccionado.
	const deleteItem = () => {};

	//Metodo Reduce - CartWidget - Se encarga retornar la cantidad de productos que hay en el carrito.
	const getItemQty = () => {};

	//Metodo Reduce - Cart - Se encarga retornar el precio total de productos que hay en el carrito.
	const getItemPrice = () => {};

	return <Provider>{children}</Provider>;
};

export default CartContextProvider;
