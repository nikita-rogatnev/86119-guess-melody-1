import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `test.mp3`,
        genre: `rock`,
      },
      {
        src: `test.mp3`,
        genre: `blues`,
      },
      {
        src: `test.mp3`,
        genre: `jazz`,
      },
      {
        src: `test.mp3`,
        genre: `rock`,
      },
    ],
  },
};

it(`GenreQuestionScreen is rendered correctly`, () => {
  const {question} = mock;
  const tree = renderer.create(<GenreQuestionScreen
    onAnswer={jest.fn()}
    question={question}
  />, {
    createNodeMock: () => {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
