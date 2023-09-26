import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLogo = styled(Link)`
  position: absolute;
  left: 7.5rem;
  top: 2.5rem;
  overflow: hidden;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  background-color: #F6F6E9;
  height: 6.875rem;
`;

export const Nav = styled.ul`
  position: absolute;
  justify-content: space-between;
  width: 9.875rem;
  height: 1.563rem;
  left: 61.875rem;
  top: 2.656rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  list-style: none;
  display: flex;
  align-items: center;
  letter-spacing: 0.00892857em;
  text-transform: uppercase;
  color: #373734;
  white-space: nowrap;  

  @media (max-width: 428px) {
    left: 45rem;
  }
`;

export const NavItem = styled.li`
  margin-right: 3.125rem;
  cursor: pointer;

  &:hover {
    color: #007A46;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  justify-content: space-between;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 14.313rem;
  height: 3.375rem;
  right: 9.375rem;
  border-radius: 0.25rem;
`;

export const Section = styled.div`
  cursor: pointer;
`;
