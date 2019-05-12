import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`WelcomeScreen`, () => {
  it(`Start game button click handles`, () => {
    const clickHandler = jest.fn();

    const welcomeScreen = shallow(<WelcomeScreen
      errorCount={0}
      gameTime={0}
      onClick={clickHandler}
    />);

    const startGameButton = welcomeScreen.find(`.welcome__button`);
    startGameButton.simulate(`click`);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
