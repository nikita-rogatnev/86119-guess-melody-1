import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import WelcomeScreen from "../welcome-screen/welcome-screen";
import ArtistQuestionScreen from "../artist-question-screen/artist-question-screen";
import QuestionGenreScreen from "../genre-question-screen/genre-question-screen";

const Type = {
  ARTIST: `game--artist`,
  GENRE: `game--genre`,
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentQuestionNum: -1,
    };
  }

  _getScreen(questions) {
    if (this.state.currentQuestionNum === -1) {
      const {
        errorCount,
        gameTime,
      } = this.props;

      return <WelcomeScreen
        errorCount={errorCount}
        gameTime={gameTime}
        onClick={this.changeViewToNextScreen}
      />;
    }

    switch (questions.type) {
      case `genre`:
        return <QuestionGenreScreen
          question={questions}
          onAnswer={this.changeViewToNextScreen}
        />;

      case `artist`:
        return <ArtistQuestionScreen
          question={questions}
          onAnswer={this.changeViewToNextScreen}
        />;
    }

    return null;
  }

  changeViewToNextScreen = () => {
    console.log(this.state.currentQuestionNum, this.props.questions.length);
    this.setState({
      currentQuestionNum: this.state.currentQuestionNum + 1 >= this.props.questions.length
        ? -1
        : this.state.currentQuestionNum + 1,
    });
  };

  render() {
    const {questions} = this.props;
    const {currentQuestionNum} = this.state;

    return <section className={`game ${Type.ARTIST}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"/>
          <div className="wrong"/>
          <div className="wrong"/>
        </div>
      </header>

      {this._getScreen(questions[currentQuestionNum], () => {
        this.changeViewToNextScreen(questions, currentQuestionNum);
      })}
    </section>;
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

export default App;
