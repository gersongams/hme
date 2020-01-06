import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { setRole, setScreen } from "../store/actions";
import screens from "../utils/screens";
import { Wrapper } from "./Layout";

const ConnectedAuth = ({ setRole, setScreen }) => (
  <Wrapper>
    <h1>Login</h1>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem 0"
      }}
    >
      <Button
        action={() => {
          setRole("ADMIN");
          setScreen(screens.timer);
        }}
      >
        Admin
      </Button>
      <Button
        action={() => {
          setRole("USER");
          setScreen(screens.menu);
        }}
      >
        User
      </Button>
    </div>
  </Wrapper>
);

const mapDispatchToProps = dispatch => ({
  setRole: role => dispatch(setRole(role)),
  setScreen: screen => dispatch(setScreen(screen))
});

const Auth = connect(null, mapDispatchToProps)(ConnectedAuth);

export default Auth;
