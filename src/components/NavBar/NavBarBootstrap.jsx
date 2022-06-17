import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./NavBarBootstrap.css";
import { Link } from "react-router-dom";
function NavBarBootstrap() {
	return (
		<Navbar className="nav" bg="dark" variant="dark" expand="lg">
			<Container>
				<Link to={"/"}>
					<img className="logo" src={logo} alt="Cafenetic logo" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto Nav.LinkNav">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/shop">
							Shop
						</Nav.Link>
						<Nav.Link as={Link} to="/journal">
							Journal
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>
					</Nav>
					<div>
						<CartWidget number={3} />
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBarBootstrap;
