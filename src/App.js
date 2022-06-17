import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBarBootstrap from "./components/NavBar/NavBarBootstrap";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import Products from "./pages/Products";

function App() {
	return (
		<div className="App">
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
					<Route path="*" element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
