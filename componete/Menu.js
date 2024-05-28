import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="info" dark expand="md" className="fixed-top">
                <Container>
                <NavbarBrand href="/">Sibre</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/comunhao">Comunhão</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contato">Contato</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/sobre">Sobre</NavLink>
                        </NavItem>

                    </Nav>                   
                    <NavbarBrand href="/">Gloria a Deus!!!</NavbarBrand>
                </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}


export default Menu;