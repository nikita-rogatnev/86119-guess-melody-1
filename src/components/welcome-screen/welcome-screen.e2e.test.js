import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`WelcomeScreen`, () => {
  it(`Start game button click handles`, () => {
    const clickHandler = jest.fn();

    const welcomeScreen = shallow(<WelcomeScreen
      time={0}
      errorCount={0}
      onStartButtonClick={clickHandler}
    />);

    const startGameButton = welcomeScreen.find(`.welcome__button`);
    startGameButton.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
