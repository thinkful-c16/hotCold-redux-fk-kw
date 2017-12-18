import {SHOW_FEEDBACK, ADD_GUESS, RANDOM_ANSWER} from './actions'

const initialState = {
    guesses: [],
    feedback:'Make your guess!',
    auralStatus: '',
    correctAnswer: null
}

export const guessesReducer = (state=initialState, action) => {
 if (action.type === ADD_GUESS) {
     //merging the new object with the previous state and it contains just the guesses property
    return Object.assign({}, state, {guesses: [...state.guesses, action.number]} )
        
} else if (action.type === RANDOM_ANSWER) {
    return Object.assign({}, state, {correctAnswer: action.number})
} else if (action.type === SHOW_FEEDBACK) {
    return Object.assign({}, state, {feedback: action.feedback})
}
else return state
 
}

