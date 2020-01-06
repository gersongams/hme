import React, { useEffect } from "react";
import styled from "styled-components";
import { setScreen } from "../store/actions";
import { connect } from "react-redux";
import screens from "../utils/screens";

const StyledHeader = styled.header`
  position: absolute;
  top: 1rem;
  display: flex;
  div {
    font-size: 2rem;
    padding: 1rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.color.primary};
    }
  }
`;

const ConnectedHeader = ({ role, setScreen }) => {
  return (
    <StyledHeader>
      <div onClick={() => setScreen(screens.menu)}>Game</div>
      {role === "ADMIN" && (
        <div onClick={() => setScreen(screens.timer)}>Settings</div>
      )}
    </StyledHeader>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  setScreen: screen => dispatch(setScreen(screen))
});

const Header = connect(mapStateToProps, mapDispatchToProps)(ConnectedHeader);

export default Header;
