import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 6.25rem;
    left: 0rem;
    top: 271.12rem;
    background: #F6F6E9;

    @media (max-width: 428px) {
    height: 190px;
    background: #F6F6E9;
  }
`;

export const FooterLogo = styled.img`
    position: absolute;
    left: 20rem;
    top: 272.75rem;

    @media (max-width: 428px) {
    height: 5rem;
    left: 35rem;
  }
`;

export const TextFooter = styled.div`
    position: absolute;
    width: 8.813rem;
    left: 93.75rem;
    top: 272.75rem;
    font-family: 'Prata';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 28px;
    text-align: center;
    white-space: nowrap;
    color: #373734;

    @media (max-width: 428px) {
    display: none;
  }
`;