import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, {Component} from "react";

class Navigation extends Component{
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">Hangman</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-light pull-left">Reset</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;