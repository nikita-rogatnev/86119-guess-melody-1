import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen';

it(`WelcomeScreen renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={0}
      gameTime={0}
      onClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
