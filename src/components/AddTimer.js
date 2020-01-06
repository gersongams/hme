import React, { useState } from "react";
import Button from "./Button";
import { addTimer, setScreen } from "../store/actions";
import { connect } from "react-redux";
import Input from "./Input";
import screens from "../utils/screens";
import { Wrapper } from "./Layout";

const ConnectedTimer = ({ addTimer, setScreen }) => {
  let [timer, setTimer] = useState("");
  let [error, setError] = useState(false);

  const changeTimer = event => {
    const value = event.target.value;
    if (value > 30) {
      setError(true);
    } else {
      setError(false);
      setTimer(value);
    }
  };

  const submitTimer = event => {
    event.preventDefault();
    addTimer(timer);
    setScreen(screens.timer);
  };

  return (
    <Wrapper>
      <h1>New timer</h1>
      <form
        onSubmit={submitTimer}
        style={{ display: "flex", margin: "2rem 0" }}
      >
        <Input
          type={"number"}
          value={timer}
          onChange={changeTimer}
          style={{ marginRight: "1rem", width: "100%" }}
          required
        />
        <Button type="submit">Add</Button>
        <Button
          action={() => setScreen(screens.timer)}
          style={{ marginLeft: "0.5rem" }}
        >
          Cancel
        </Button>
      </form>
      {error && (
        <div style={{ color: "red" }}>
          The timer should be lesser or equal than 30 secs
        </div>
      )}
    </Wrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addTimer: timer => dispatch(addTimer(timer)),
  setScreen: screen => dispatch(setScreen(screen))
});

const Timer = connect(null, mapDispatchToProps)(ConnectedTimer);

export default Timer;
