import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavLogo = styled(Link)`
  position: absolute;
  left: 70px;
  top: 25px;
  overflow: hidden;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  background-color: #F6F6E9;
  height: 110px;
`;

export const Nav = styled.ul`
  position: absolute;
  justify-content: space-between;
  width: 158px;
  height: 25px;
  left: 1100px;
  top: 42.5px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  list-style: none;
  display: flex;
  align-items: center;
  letter-spacing: 0.00892857em;
  text-transform: uppercase;
  color: #373734;
  white-space: nowrap;  
`;

export const NavItem = styled.li`
  margin-right: 50px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  justify-content: space-between;
  &:hover {
    color: #007A46;
  }
`;

export const ButtonLink = styled(Link)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 229px;
height: 54px;
right: 150px;
border-radius: 4px;
`;
