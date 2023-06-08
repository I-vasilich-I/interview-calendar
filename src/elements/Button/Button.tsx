import { ReactNode } from "react";
import { styled } from "styled-components";

type Props = {
  title: ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
  display: flex;
  place-content: center;
  padding: 0.5rem;
  font-size: 1.4rem;
  color: var(--primary-color);
  background-color: transparent;
  border: none;
  border-radius: 0.5rem;
  outline: none;  
  transition: all .3s ease-in-out;
  cursor: pointer;

  &:focus-visible, &:hover {
    background-color: var(--primary-light-color);
  }
`

export const Button = ({ title, onClick }: Props) => <StyledButton onClick={onClick}>{title}</StyledButton>