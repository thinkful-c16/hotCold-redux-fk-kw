import {createStore} from 'redux';
import {guessesReducer} from './reducers';

export default createStore(guessesReducer);