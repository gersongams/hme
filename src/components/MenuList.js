import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const StyledList = styled.ul`
  width: 100%;
`;

export default ({ data }) => (
  <StyledList>
    {data.map(i => (
      <MenuItem key={i.id} id={i.id} name={i.name} price={i.price} />
    ))}
  </StyledList>
);
