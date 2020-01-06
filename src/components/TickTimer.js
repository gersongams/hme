import React from "react";
import styled from "styled-components";

const StyledTickTimer = styled.div`
  position: absolute;
  right: 0;
  border-radius: 50%;
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.secondary};
  width: 3rem;
  height: 3rem;
  display: flex;
  font-size: 1.2rem;
  justify-content: center;
  align-items: center;
`;

export default ({ time }) => (
  <StyledTickTimer>
    <span>{time}</span>
  </StyledTickTimer>
);
