import {
	Container,
	Nav,
	Navbar,
	NavDropdown,
	Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import "./navBarBootstrap.css";
function NavBarBootstrap() {
	return (
		<>
			{[false].map((expand) => (
				<Navbar
					key={expand}
					bg="bla"
					expand={expand}
					className="navbar"
				>
					<Container fluid>
						<Navbar.Brand className="writtenLogo" as={Link} to="/">
							CAFENETIC
						</Navbar.Brand>
						<Navbar.Toggle
							className="white"
							aria-controls={`offcanvasNavbar-expand-${expand}`}
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									MENU
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="justify-content-end flex-grow-1 pe-3">
									<Nav.Link
										className="black"
										as={Link}
										to="/"
									>
										Home
									</Nav.Link>
									<NavDropdown
										title={
											<span className="text-black my-auto">
												Shop
											</span>
										}
										id={`offcanvasNavbarDropdown-expand-${expand}`}
										className="black text-white"
									>
										<NavDropdown.Item as={Link} to="/shop">
											All
										</NavDropdown.Item>
										<NavDropdown.Item
											as={Link}
											to="/shop/coffee"
										>
											COFFEE
										</NavDropdown.Item>
										<NavDropdown.Item
											as={Link}
											to="/shop/decaf"
										>
											DECAF
										</NavDropdown.Item>
										<NavDropdown.Item
											as={Link}
											to="/shop/coldbrew"
										>
											COLDBREW
										</NavDropdown.Item>
										<NavDropdown.Item to="/shop/gifs">
											GIFS
										</NavDropdown.Item>
									</NavDropdown>
									<Nav.Link
										className="black"
										as={Link}
										to="/journal"
									>
										Journal
									</Nav.Link>
									<Nav.Link
										className="black"
										as={Link}
										to="/contact"
									>
										Contact
									</Nav.Link>
								</Nav>
								<div>
									<CartWidget />
								</div>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
}

export default NavBarBootstrap;
