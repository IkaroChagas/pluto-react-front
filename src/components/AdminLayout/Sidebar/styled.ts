import styled from "styled-components";
import { Link } from "react-router-dom";

export const Sidebar = styled.div`
  width: 295px;
  height: 100vh;
  background: #00C172;
  padding: 3.0rem;
  box-sizing: border-box;

  @media (max-width: 428px) {
    width: 295px; 
    flex-direction: column; 
  }
`;

export const Logo = styled.h1`
  width: 141px;
  height: 80px;
  top: 45px;
  font-family: 'Secular One', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  margin-top: 5px;
  color: #F5F5F5;
`;

export const NavHeader = styled.h3`
  position: relative;
  font-family: 'Roboto';
  list-style: none;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: #F5F5F5;
`;

export const HomeIcon = styled.img`
  position: absolute;
  left: -30px;
  top: 0.6rem;
  transform: translateY(-50%);
`;

export const PlanIcon = styled.img`
  position: absolute;
  left: -30px;
  top: 0.6rem;
  transform: translateY(-50%);
`;

export const UnitsIcon = styled.img`
  position: absolute;
  left: -30px;
  top: 0.6rem;
  transform: translateY(-50%);
`;

export const NavigationList = styled.ul`
  list-style: none;
  margin: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

export const NavigationItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const NavigationLink = styled(Link)`
  color: #F5F5F5;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 0.5rem;

  &:hover {
    background-color: #31CB8A;
    border-radius: 1px;
  }
`;
