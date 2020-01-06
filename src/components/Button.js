import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.primary};
  border: none;
  cursor: pointer;
  padding: 1rem 3rem;
  border-radius: 10px;
  outline: transparent;
  font-size: 1.6rem;
`;

export default ({
  children,
  action,
  type = "button",
  disabled = false,
  style
}) => (
  <StyledButton onClick={action} type={type} disabled={disabled} style={style}>
    {children}
  </StyledButton>
);
