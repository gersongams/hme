import React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
  padding: 0 2rem;
`;

export default ({ name, price, id }) => (
  <StyledItem key={id}>
    <div>{name}</div>
    <div>${price}</div>
  </StyledItem>
);
