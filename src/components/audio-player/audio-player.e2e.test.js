import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

describe(`AudioPlayer`, () => {
  const url = `https://test.ru`;

  it(`AudioPlayer has correct icon when not playing`, () => {
    const clickHandler = jest.fn();

    const audioPlayer = shallow(<AudioPlayer
      src={url}
      isPlaying={false}
      onPlayButtonClick={clickHandler}
    />);

    const audioPlayerButton = audioPlayer.find(`.track__button`);
    expect(audioPlayerButton.hasClass(`track__button--play`)).toEqual(true);
    expect(audioPlayerButton.hasClass(`track__button--pause`)).toEqual(false);
  });

  it(`AudioPlayer has correct icon when playing`, () => {
    const clickHandler = jest.fn();

    const audioPlayer = shallow(<AudioPlayer
      src={url}
      isPlaying={false}
      onPlayButtonClick={clickHandler}
    />);

    const audioPlayerButton = audioPlayer.find(`.track__button`);
    expect(audioPlayerButton.hasClass(`track__button--play`)).toEqual(false);
    expect(audioPlayerButton.hasClass(`track__button--pause`)).toEqual(true);
  });
});
