import React, { Fragment } from "react";
import Input from "./Input";
import Button from "./Button";
import TickTimer from "./TickTimer";
import { Wrapper } from "./Layout";
import {
  guessMenu,
  setScreen,
  setGuess,
  setGameStatus
} from "../store/actions";
import { connect } from "react-redux";
import sample from "lodash/sample";

class ConnectedGuessMenu extends React.Component {
  state = {
    seconds: "10",
    menu: ""
  };

  componentDidMount() {
    const { menu, setGuess } = this.props;
    this.startCountDown();
    setGuess(sample(menu));
  }

  tick = () => {
    let sec = this.timeRemaining;
    const { setGameStatus, gameStatus } = this.props;

    this.setState({
      seconds: sec
    });

    if (sec === 0) {
      clearInterval(this.intervalHandle);
      if (gameStatus !== "SUCCESS") {
        setGameStatus("TIMEOUT");
      }
    }

    this.timeRemaining--;
  };

  startCountDown = () => {
    const { timers } = this.props;
    this.intervalHandle = setInterval(this.tick, 1000);
    const time = timers.find(i => i.isSelected === true);
    this.timeRemaining = time.label;
  };

  guessMenu = event => {
    event.preventDefault();
    const { menu } = this.state;
    const { guessMenu } = this.props;
    guessMenu(menu);
  };

  handleMenuAttempt = event => {
    const value = event.target.value;
    this.setState({ menu: value });
  };

  render() {
    const { seconds, menu } = this.state;
    const { gameStatus, guess, matched } = this.props;
    return (
      <Wrapper>
        <TickTimer time={seconds} />
        <h2 style={{ margin: 0, textAlign: "left" }}>
          Number of words matched: {matched}
        </h2>
        {gameStatus === "PLAYING" && (
          <Fragment>
            <h1 style={{ margin: "3rem" }}>Guess the menu of the day</h1>
            <p>{guess.question}</p>
          </Fragment>
        )}
        {gameStatus === "SUCCESS" && (
          <Fragment>
            <h1 style={{ margin: "3rem", color: "green" }}>
              Congratulations! You found the menu of the day
            </h1>
            <p style={{ fontSize: "2.4rem", color: "#FFAD1F" }}>
              {guess.name} ${guess.price}
            </p>
          </Fragment>
        )}
        {gameStatus === "TIMEOUT" && (
          <Fragment>
            <h1 style={{ margin: "3rem", color: "red" }}>
              Oops! Timeout! The menu of the day is:
            </h1>
            <p style={{ fontSize: "2.4rem", color: "#FFAD1F" }}>
              {guess.name} ${guess.price}
            </p>
          </Fragment>
        )}
        <form
          onSubmit={this.guessMenu}
          style={{ display: "flex", margin: "2rem 0" }}
        >
          <Input
            disabled={gameStatus !== "PLAYING"}
            onChange={this.handleMenuAttempt}
            value={menu}
            required
            style={{ width: "100%", marginRight: "1rem" }}
          />
          <Button type={"submit"} disabled={gameStatus !== "PLAYING"}>
            Submit
          </Button>
        </form>
      </Wrapper>
    );
  }
}

const mapStateToProps = reducer => ({
  ...reducer
});

const mapDispatchToProps = dispatch => ({
  setScreen: screen => dispatch(setScreen(screen)),
  setGuess: question => dispatch(setGuess(question)),
  guessMenu: attempt => dispatch(guessMenu(attempt)),
  setGameStatus: status => dispatch(setGameStatus(status))
});

const GuessMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedGuessMenu);

export default GuessMenu;
