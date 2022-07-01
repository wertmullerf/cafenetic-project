import ProductsFirstShow from "../components/Section/ProductsFirstShow";
import HeroSection from "../components/Section/HeroSection";
import Sustainability from "../components/Section/Sustainability";

function Home() {
	return (
		<div className="home">
			<HeroSection />
			<Sustainability />
			<ProductsFirstShow />
		</div>
	);
}

export default Home;
