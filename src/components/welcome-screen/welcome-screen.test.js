import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen';

it(`WelcomeScreen renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={0}
      errorCount={0}
      onStartButtonClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
