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
    font-family: 'Prata';
    color: #F6F6E9;
    padding-top: 120px;
    padding-bottom: 70px;
    align-items: center;
    justify-content: center;
    font-family: 'Prata';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 75px;
`;

export const ContainerImages = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 200px;
`;

export const HandsImage = styled.img`
margin-bottom: 250px;
  width: 150px;
  height: 150px;
`;

export const WorldImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -200px;
`;

export const TextHands = styled.p`
    margin-left: 300px;
    align-items: center;
    width: 490px;
    height: 250px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    text-align: center;
    color: #F6F6E9;
`;

export const TextWorld = styled.p`
    margin-left: auto;
    margin-right: 280px;
    width: 490px;
    height: 250px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 40px;
    text-align: center;
    color: #F6F6E9;
`;

export const Rectangle = styled.div`
    display: flex;
    margin: auto;
    margin-top: 70px;
    margin-bottom: 70px;
    width: 1600px;
    height: 671px;
    background: #F6F6E9;
    border-radius: 20px;
`;

export const EllipseredImage = styled.img`
    position: absolute;
    width: 150px;
    height: 150px;
    left: 460px;
    top: 1650px;
`;

export const RectangleText = styled.h1`
    position: absolute;
    width: 413px;
    height: 225px;
    left: 320px;
    top: 1900px;
    font-family: 'Prata';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 75px;
    color: #373734;
`;

export const RectangleText2 = styled.p`  
    position: absolute;
    width: 413px;
    height: 50px;
    left: 320px;
    top: 2150px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 21px;
    line-height: 25px;
    color: #373734;
`;

export const RectangleCards = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const FirstCard = styled.img`
    position: absolute;
    width: 304px;
    height: 431px;
    left: 872px;
`;

export const SecondCard = styled.img`
    position: absolute;
    width: 304px;
    height: 431px;
    left: 1296px;
`;

export const TextContainer2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const Header2 = styled.h1`
  margin: auto;
  width: 446px;
  height: 75px;
  padding-top: 100px;
  font-family: 'Prata';
  font-style: normal;
  font-weight: 400;
  font-size: 55px;
  line-height: 75px;
  color: #F6F6E9;
`;

export const Text2 = styled.p`
  margin: 0;
  width: 446px;
  height: 50px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 25px;
  text-align: center;
  color: #F6F6E9;
  padding-bottom: 100px;
`;

export const AndressContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 45px;
  grid-column-gap: 0px;
`;

export const AndressImage = styled.img`
    margin: auto;
    width: 550px;
    height: auto;
`;

export const MapContainer = styled.div`
   display: flex;
   margin: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  height: 342px; 
  padding-top: 100px;
  padding-bottom: 200px;
`;

export const MapImage = styled.img`
  
  margin: auto;
  width: 1500px;
  height: 400px;
  left: 320px;
`;