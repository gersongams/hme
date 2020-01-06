import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 2rem;
  border-radius: 10px;
`;

export default ({ children }) => <StyledCard>{children}</StyledCard>;
