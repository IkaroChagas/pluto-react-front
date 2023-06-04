import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color: #00C172;
    width: 100%;
`;

export const HeaderH1 = styled.h1`
    display: block;
    margin: auto;
    font-family: Prata;
    color: #F6F6E9;
    padding-top: 70px;
    padding-bottom: 100px;
    align-items: center;
    justify-content: center;
`;

export const ContainerImages = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 200px;
`;

export const HandsImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const WorldImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const TextHands = styled.p`
    display: flex;
    margin-left: 300px;
    align-items: center;
    width: 490px;
    height: 250px;
    top: 1000px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    text-align: center;
    color: #F6F6E9;
`;

export const TextWorld = styled.p`
    display: flex;
    margin-left: 300px;
    align-items: center;
    width: 490px;
    height: 250px;
    top: 1000px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    text-align: center;
    color: #F6F6E9;
`;