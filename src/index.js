import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import {showFeedback, addGuess, randomAnswer} from './actions'
import store from './store';

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


store.dispatch(addGuess(32));
console.log(store.getState());
