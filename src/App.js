import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/Containers/ItemDetailContainer";
import ItemListContainer from "./components/Containers/ItemListContainer";
import { Footer } from "./components/Footer/Footer";
import NavBarBootstrap from "./components/NavBar/NavBarBootstrap";
import CartContextProvider from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Products from "./pages/Products";

function App() {
	const firebaseConfig = {
		apiKey: "AIzaSyCdTdeBR24K959zQ0b5IfSDacJ5A9IjrXU",
		authDomain: "cafenetic.firebaseapp.com",
		projectId: "cafenetic",
		storageBucket: "cafenetic.appspot.com",
		messagingSenderId: "478642590510",
		appId: "1:478642590510:web:e081fefe22437f231d20bf",
	};

	initializeApp(firebaseConfig);
	return (
		<div className="App">
			<CartContextProvider>
				<BrowserRouter>
					<NavBarBootstrap />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/shop" element={<Products />} />
						<Route
							path="/item/:idProducto"
							element={<ItemDetailContainer />}
						/>
						<Route
							path="/shop/:categoryId"
							element={<ItemListContainer />}
						/>
						<Route path="/journal" element={<Journal />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="*" element={<ErrorPage />} />
						<Route path="/checkout" element={<CheckoutPage />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartContextProvider>
		</div>
	);
}

export default App;
