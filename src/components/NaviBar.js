import React from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import '../App.css';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom'



export default function NaviBar() {
    return (
    <>
        <Navbar collapseOnSelect className="navig" expand="lg">
            <Navbar.Brand className="logo"><img src={logo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="NavItems">
                <Nav className="mr-auto">
                    <Nav.Link className="nav__inner"><Link to="/">Главная страница</Link></Nav.Link>
                    <Nav.Link className="nav__inner"><Link to="/users">Отправка заявки</Link></Nav.Link>
                    <Nav.Link className="nav__inner"><Link to="/about">Все заявки</Link></Nav.Link>
                </Nav>
                <Nav className="buttons">
                    <Button variant="primary" className="nav__inner nav__button">Log in</Button>
                    <Button variant="primary" className="nav__inner nav__button">Sign in</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    );
}