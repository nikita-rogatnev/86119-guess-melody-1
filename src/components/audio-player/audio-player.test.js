import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player';

it(`Player renders correctly`, () => {
  const url = `https://test.ru`;

  const tree = renderer
    .create(<AudioPlayer
      src={url}
      isPlaying={false}
      onPlayButtonClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
