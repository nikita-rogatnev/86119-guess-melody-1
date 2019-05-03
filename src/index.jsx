import React from "react";
import ReactDOM from 'react-dom';
import App from './components/app/app';

const appContainer = document.querySelector(`.main`);
const settings = {
  gameTime: 55,
  errorCount: 3,
};

ReactDOM.render(<App errorCount={settings.errorCount} gameTime={settings.gameTime}/>, appContainer);
