import React from "react";
import Freatures from "../components/Freatures/Freatures";
import HeroSection from "../components/HeroSection/HeroSection";
import ProductsFirstShow from "../components/ProductsFirstShow/ProductsFirstShow";
import Sustainability from "../components/Sustainability/Sustainability";

function Home() {
	return (
		<div className="home">
			{/* <ItemListContainer msg={"Bienvenidos a mi tienda online!"} /> */}
			<HeroSection />
			<Sustainability />
			<ProductsFirstShow />
			{/* <Freatures /> */}
		</div>
	);
}

export default Home;
