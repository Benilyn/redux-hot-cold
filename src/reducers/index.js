import * as actions from '../actions';

const initialState = {
	guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export const reduxHotCold = (state=initialState, action) => {
	if (action.type === actions.MAKE_GUESS) {
		let guess = parseInt(action.guess);
		const difference = Math.abs(guess - initialState.correctAnswer);

    	if (isNaN(guess)) {
    		return Object.assign({}, state, {
    			feedback: 'Please enter a valid number'
    		});
      	}

      	if (difference >= 50) {
      		return Object.assign({}, state, {
    			feedback: 'You\'re Ice Cold...',
    			guesses: [...state.guesses, action.guess]
    		});
	    } else if (difference >= 30) {
	    	return Object.assign({}, state, {
    			feedback: 'You\'re Cold...',
    			guesses: [...state.guesses, action.guess]
    		});
	    } else if (difference >= 10) {
	    	return Object.assign({}, state, {
    			feedback: 'You\'re Warm.',
    			guesses: [...state.guesses, action.guess]
    		});
	    } else if (difference >= 1) {
	    	return Object.assign({}, state, {
    			feedback: 'You\'re Hot!',
    			guesses: [...state.guesses, action.guess]
    		});
	    } else {
	    	return Object.assign({}, state, {
    			feedback: 'You got it!',
    			guesses: [...state.guesses, action.guess]
    		});
	    }
	} //actions.MAKE_GUESS

	if (action.type === actions.RESTART_GAME) {
		return Object.assign({}, state, {
			initialState
		});
	} //actions.RESTART_GAME

	else if (action.type === actions.AURAL_UPDATE) {
		const pluralize = state.guesses.length !== 1;
		let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
		document.title = state.feedback ? `${state.feedback} | Hot or Cold` : 'Hot or Cold';
		if (state.guesses.length > 0) {
      		auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
    		return Object.assign({}, state, {
				auralStatus
			});
    	} //if (guesses.length > 0)
    	else {
    		return Object.assign({}, state, {
				auralStatus
			}); 
    	} //else
	} //actions AURAL_UPDATE



	return state;
	
}; //export const reduxHotCold