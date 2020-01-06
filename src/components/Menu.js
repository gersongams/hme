import React from "react";
import MenuList from "./MenuList";
import TickTimer from "./TickTimer";
import { Wrapper } from "./Layout";
import { setScreen } from "../store/actions";
import { connect } from "react-redux";
import screens from "../utils/screens";

class ConnectedMenu extends React.Component {
  state = {
    seconds: "10"
  };

  componentDidMount() {
    this.startCountDown();
  }

  tick = () => {
    let sec = this.timeRemaining;
    const { setScreen } = this.props;

    this.setState({
      seconds: sec
    });

    if (sec === 0) {
      clearInterval(this.intervalHandle);
      setScreen(screens.guessMenu);
    }

    this.timeRemaining--;
  };

  startCountDown = () => {
    const { timers } = this.props;
    this.intervalHandle = setInterval(this.tick, 1000);
    const time = timers.find(i => i.isSelected === true);
    this.timeRemaining = time.label;
  };

  render() {
    const { menu } = this.props;
    const { seconds } = this.state;
    return (
      <Wrapper>
        <TickTimer time={seconds} />
        <h1>Welcome to HME</h1>
        <h2>Today's menu - 10/31/2019</h2>
        <MenuList data={menu} />
      </Wrapper>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  setScreen: screen => dispatch(setScreen(screen))
});

const Menu = connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);

export default Menu;
