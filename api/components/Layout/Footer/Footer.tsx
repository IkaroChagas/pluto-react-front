import React from 'react';
import * as C from './styled';
import FooterLogo from '../../../assets/footerlogo.png'
import ScrollToTop from '../../FooterButton/FooterButton'

const Footer: React.FC = () => {


    return (
        <C.FooterContainer>
            <C.FooterLogo src={FooterLogo} />
            <C.TextFooter>
                Voltar ao topo
            </C.TextFooter>
            <ScrollToTop />
        </C.FooterContainer>

    );
}

export default Footer;
