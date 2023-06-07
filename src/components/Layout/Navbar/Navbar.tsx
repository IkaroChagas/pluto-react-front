import React from 'react';
import * as C from './styled';
import logo from '../../../assets/logo.png';
import Button from '../../../assets/button.png';


const Navbar: React.FC = () => {


    const handleInicioClick = () => {

    }

    const handleLoginClick = () => {

    };

    const handlePropositoClick = () => {

    };

    const handleUnidadesClick = () => {

    };

    return (
        <C.NavbarContainer>
            <C.NavLogo onClick={handleInicioClick} to="/">
                <img src={logo} />
            </C.NavLogo>

            <C.Nav>
                <C.NavItem>
                    <C.NavLink onClick={handlePropositoClick} to="/propositos">Nosso Propósito</C.NavLink>
                </C.NavItem>
                <C.NavItem>
                    <C.NavLink onClick={handleUnidadesClick} to="/unidades">Nossas Unidades</C.NavLink>
                </C.NavItem>
                <C.NavItem>
                    <C.ButtonLink to="/login">
                        <img src={Button} />
                    </C.ButtonLink>
                </C.NavItem>
            </C.Nav>
        </C.NavbarContainer>
    );
};

export default Navbar;
