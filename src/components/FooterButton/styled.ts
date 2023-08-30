import styled from "styled-components";

interface BackToTopButtonProps {
  visible: boolean;
}

export const BackToTopButton = styled.button<BackToTopButtonProps>`
  position: fixed;
  top: 58.25rem;
  right: 12rem;
  border-radius: 50%;
  background: #F6F6E9;
  width: 50px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  transition: opacity 0.3s ease-in-out;
`;
