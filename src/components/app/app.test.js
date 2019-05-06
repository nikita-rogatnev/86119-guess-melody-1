import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      gameTime={0}
      errorCount={0}
      onStartButtonClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
