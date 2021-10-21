import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoImage from './Logo';
import { FaUserAlt } from 'react-icons/fa';

export default function Header () {
    return (
        <Navbar className="Header-Container" expand="lg">
            <Navbar.Brand to="/">
                <LogoImage/>
                <h1 className="Logo-Title">La Chapelle-Curreaux</h1>
            </Navbar.Brand>
            <Navbar.Toggle className="Button-Toggle" aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">

                <Nav
                className="Nav">
                    <Nav.Link className="Link-Collapse" ><Link to="/">Accueil</Link></Nav.Link>
                    <Nav.Link className="Link-Collapse" ><Link to="/catalogue">Catalogue</Link></Nav.Link>
                    <Nav.Link className="Link-Collapse" ><Link to="/info">Info</Link></Nav.Link>
                    <Nav.Link className="Link-Collapse" ><Link to="/contact">Contact</Link></Nav.Link>
                    <Nav.Link className="Link-Collapse" ><Link to="/signin"><FaUserAlt/></Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}