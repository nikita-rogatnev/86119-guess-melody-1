import React from 'react';
import renderer from 'react-test-renderer';

import App from './app';
import questions from "../../mocks/questions";

it(`App renders correctly`, () => {
  const tree = renderer
    .create(<App
      errorCount={0}
      gameTime={0}
      questions={questions}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
