import * as actions from '../actions';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const reduxHotCold = (state=initialState, action) => {
	if (action.type === actions.MAKE_GUESS) {
		return Object.assign({}, state, {
			guess: action.guess
		});
	} //actions.MAKE_GUESS

	if (action.type === actions.RESTART_GAME) {
		return Object.assign({}, state, {
			initialState
		});
	} //actions.RESTART_GAME

	if (action.type === actions.AURAL_UPDATE) {
		return Object.assign({}, state, {
			//auralStatus
		});
	} //actions AURAL_UPDATE

	return state;
	
}; //export const reduxHotCold