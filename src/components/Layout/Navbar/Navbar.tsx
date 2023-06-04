import React from 'react';
import { NavbarContainer, Nav, NavItem, NavLink, ButtonLink, NavLogo } from './styled';
import logo from '../../../assets/logo.png';
import Button from '../../../assets/button.png';


const Navbar: React.FC = () => {

    return (
        <NavbarContainer>

            <NavLogo to="/"><img src={logo} /></NavLogo>

            <Nav>
                <NavItem>
                    <NavLink to="/proposito">Nosso Propósito</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/unidades">Nossas Unidades</NavLink>
                </NavItem>
                <NavItem>
                    <ButtonLink to="/doe"><img src={Button} /></ButtonLink>
                </NavItem>
            </Nav >
        </NavbarContainer >
    );
};

export default Navbar;
