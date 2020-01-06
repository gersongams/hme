import React from "react";
import styled from "styled-components";

const StyledLayout = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => props.theme.color.secondary};
  position: relative;
`;

export const Wrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoint.tabLand}) {
    max-width: 320px;
  }

  h1 {
    font-size: 3.2rem;
    line-height: normal;
    margin: 1rem 0;
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.6rem;
  }
`;

export default ({ children }) => <StyledLayout>{children}</StyledLayout>;
