import React from "react"
import styled from "styled-components"

const Button = ({ children, primary }) => {
  return <StyledButton primary={primary}>{children}</StyledButton>
}

const StyledButton = styled.button`
  padding: 1.5em 4em;
  border: none;
  outline: none;
  border-radius: 10em;
  color: ${(p) => p.theme.colorsPrime.paleBlue};
  background: ${(p) => p.theme.colorsNeutral.desatBlue};
  font-weight: 600;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    color: #fff;
  }
`

export default Button
