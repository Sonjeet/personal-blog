import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper style={props.styles}>
    {props.children}
  </ButtonWrapper>
)

const ButtonWrapper = styled.button`
  background-color: transparent;
  font-size: 1.1rem;
  padding-left: 0.7rem;
  padding-right: 0.7rem;
  text-transform: uppercase;
  box-sizing: border-box;
  border: 2px solid var(--blue-heading);
  border-radius: 6px;
  cursor: pointer;
  color: var(--blue-text);
  font-family: var(--font-sans-serif);
  letter-spacing: 0.2rem;
  transition: all 0.2s linear 0s;

  &:hover {
    border-color: var(--green);
    color: var(--green);
    text-shadow: var(--text-shadow);
    box-shadow: var(--light-box-shadow);
    transform: translateY(-2px);
  }
`;

export default Button
