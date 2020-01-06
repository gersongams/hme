import React, { useEffect } from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import Menu from "./components/Menu";
import GuessMenu from "./components/GuessMenu";
import Timer from "./components/Timer";
import Auth from "./components/Auth";
import { connect } from "react-redux";
import GlobalStyle from "./utils/globalStyle";
import screens from "./utils/screens";
import AddTimer from "./components/AddTimer";
import Header from "./components/Header";

const App = ({ role, screen }) => {
  useEffect(() => {
    console.log(screen);
  });

  const renderScreen = () => {
    switch (screen) {
      case screens.auth:
        return <Auth />;
      case screens.timer:
        return <Timer />;
      case screens.menu:
        return <Menu />;
      case screens.guessMenu:
        return <GuessMenu />;
      case screens.addTimer:
        return <AddTimer />;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <Layout>
      <GlobalStyle />
      {screen !== screens.auth && <Header />}
      <Card>
        {renderScreen()}
        {/*<GuessMenu/>*/}
      </Card>
    </Layout>
  );
};

const mapStateToProps = reducer => ({
  ...reducer
});

export default connect(mapStateToProps)(App);
