import React from 'react';
import * as C from './styled';
import logo from '../../../assets/logo.png';
import Button from '../../../assets/button.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Navbar: React.FC = () => {
    const handleInicioClick = () => {
        window.location.href = '/';
    };

    const handlePropositoClick = () => {
        const element = document.getElementById('propositos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleUnidadesClick = () => {
        const element = document.getElementById('unidades');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <C.NavbarContainer>
            <C.NavLogo onClick={handleInicioClick} to="/">
                <img src={logo} alt="Logo" />
            </C.NavLogo>

            <C.Nav>
                <C.NavItem>
                    <C.Section id="propositos">
                        <ScrollLink activeClass="active" to="propositos" spy={true} smooth={true} offset={700} duration={500} onClick={handlePropositoClick}>
                            Nosso Propósito
                        </ScrollLink>
                    </C.Section>
                </C.NavItem>
                <C.NavItem>
                    <C.Section id="unidades">
                        <ScrollLink activeClass="active" to="unidades" spy={true} smooth={true} offset={2500} duration={500} onClick={handleUnidadesClick}>
                            Nossas Unidades
                        </ScrollLink>
                    </C.Section>
                </C.NavItem>
                <C.NavItem>
                    <Link to="/login">
                        <img src={Button} />
                    </Link>
                </C.NavItem>
            </C.Nav>
        </C.NavbarContainer>
    );
};

export default Navbar;
