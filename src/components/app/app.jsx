import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen';

const App = (props) => {
  const {gameTime, errorCount, onStartButtonClick} = props;

  return (
    <WelcomeScreen
      time={gameTime}
      errorCount={errorCount}
      onStartButtonClick={onStartButtonClick}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func.isRequired,
};

export default App;
