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
store.dispatch(addGuess(10));
store.dispatch(addGuess(11));
store.dispatch(addGuess(90));
store.dispatch(addGuess(56));

console.log(store.getState());

store.dispatch(randomAnswer())

console.log(store.getState());

store.dispatch(showFeedback('You got it!'))

console.log(store.getState())
