import Card from "../Ui/Card";
import "./css/sustainability.css";
function Sustainability() {
	return (
		<section className="freatures">
			<div className="title">
				<strong>Our sustainability commitment</strong>
				<p>
					We strive to form profound partnerships with farmers from
					all over the world to create perspective together and form
					healthy working relationships built on trust and respect.
					Everything we do is a matter of heart, body and soul.
				</p>
			</div>
			<Card title1={"Visit us"} title2={"Buy now"} title3={"Test it"} />
		</section>
	);
}

export default Sustainability;
