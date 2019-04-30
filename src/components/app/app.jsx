import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, errorCount} = props; // eslint-disable-line

  return (
    <WelcomeScreen
      time={gameTime}
      errorCount={errorCount}
    />
  );
};

export default App;
