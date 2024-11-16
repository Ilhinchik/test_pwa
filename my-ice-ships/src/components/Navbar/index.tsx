import "./index.css"
import {FC} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarComp from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";

export const Navbar: FC = () => {
    return (
        <header>
            <NavbarComp expand="lg"
                        data-bs-theme="dark"
                        className="dark-blue-back w-100"
            >
                <Container>
                    <NavbarComp.Brand>
                        <Link to="/" className="text-white text-decoration-none">
                            Проводка кораблей
                        </Link>
                    </NavbarComp.Brand>
                    <NavbarComp.Toggle
                        aria-controls="basic-navbar-nav"
                        className="outline-none"
                    />
                    <NavbarComp.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto gap-4 gap-sm-3">
                            <NavLink to="/ship_catalog" className="text-white text-decoration-none">
                                Каталог
                            </NavLink>
                        </Nav>
                    </NavbarComp.Collapse>
                </Container>
            </NavbarComp>
        </header>
    );
};