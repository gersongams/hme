import React, { useEffect } from "react";
import TimerList from "./TimerList";
import Button from "./Button";
import { setScreen, setTimer } from "../store/actions";
import { connect } from "react-redux";
import screens from "../utils/screens";
import { Wrapper } from "./Layout";

const ConnectedTimer = ({ timers, setScreen, setTimer }) => {
  useEffect(() => {
    console.log(timers);
  });

  const radioChangeHandler = event => {
    const value = event.target.value;
    setTimer(value);
  };

  return (
    <Wrapper>
      <h1>List of Timers</h1>
      <TimerList data={timers} changed={radioChangeHandler} />
      <Button
        disabled={timers.length >= 6}
        action={() => setScreen(screens.addTimer)}
      >
        Add Timer
      </Button>
    </Wrapper>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  setScreen: screen => dispatch(setScreen(screen)),
  setTimer: timer => dispatch(setTimer(timer))
});

const Timer = connect(mapStateToProps, mapDispatchToProps)(ConnectedTimer);

export default Timer;
