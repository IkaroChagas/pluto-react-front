import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io'
import { BackToTopButton } from './styled';


const ScrollToTop: React.FC = () => {

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 2,
            behavior: 'smooth',
        });
    };

    return (
        <BackToTopButton visible={isVisible} onClick={scrollToTop}>
            <IoIosArrowUp />
        </BackToTopButton>
    );
};

export default ScrollToTop;