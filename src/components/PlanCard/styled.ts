import styled from "styled-components";

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
  position: relative;
    width: 150px;
    height: 150px;
    left: 500px;
    top: -4rem;
    left: 20rem;
`;

export const RectangleText = styled.h1`
    position: relative;
    width: 413px;
    height: 225px;
    left: 180px;
    top: -3rem;
    font-family: 'Prata';
    font-style: normal;
    font-weight: 400;
    font-size: 55px;
    line-height: 75px;
    color: #373734;
`;

export const RectangleText2 = styled.p`
    position: relative;  
    width: 413px;
    height: 50px;
    left: 180px;
    top: -7rem;
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

export const Container = styled.div`
    position: relative;
    width: 40%;
    display: grid;
`;

export const ContainerCards = styled.div`
    position: relative;
    width: 60%;
    display: flex;
`;

export const FirstCard = styled.div`
  position: relative;
  width: 20rem;
  height: 27.73rem;
  border-radius: 1.33rem;
  overflow: hidden;
  margin-left: 110px;
  margin-top: auto;
  margin-bottom: auto;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0));
  }
`;

export const FirstCardImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const CardButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  position: absolute;
  width: 214px;
  height: 44px;
  margin-left: 20px;
  bottom: 10px;
  background: #F8475E;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
`;

export const CardButton2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  position: absolute;
  width: 214px;
  height: 44px;
  left: 82.6rem;
  top: 140rem;
  background: #F8475E;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  cursor: pointer;
`;


export const CardText = styled.p`
  width: 122px;
  height: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.008rem;
  color: #FFFFFF;
  margin-right: 2rem;
`;

export const CardText2 = styled.p`
  width: 122px;
  height: 16px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  align-items: center;
  letter-spacing: 0.008rem;
  color: #FFFFFF;
  margin-right: 2rem;
`;


export const CardIcon = styled.img`
  position: absolute;
  left: 74.68%;
  top: 34.5%;
  bottom: 13.97%;
`;

export const CardIcon2 = styled.img`
  position: absolute;
  left: 74.68%;
  top: 34.5%;
  bottom: 13.97%;
`;