import {SHOW_FEEDBACK, ADD_GUESS, RANDOM_ANSWER} from './actions'

const initialState = {
    guesses: [],
    feedback:'Make your guess!',
    auralStatus: '',
    correctAnswer: null
}

export const guessesReducer = (state=initialState, action) => {
 if (action.type === ADD_GUESS) {
    return Object.assign({}, state, state.guesses = [...state.guesses, action.number] )
        
}
    else return state
 
}

