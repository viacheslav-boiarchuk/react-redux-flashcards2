/**
 * Created by user on 10.12.2016.
 */
import {getReducersList} from '../actions/actions';
import  store from '../store/index';

const initialState = {
	wordsArray: [],
	successTranslateArray: Array.from(Array(5), () => 0)
};

export default function(state = initialState ,action){
	switch (action.type) {
		case getReducersList().SAVE_WORDS:
			return {
				...state,
				wordsArray: action.data.splice(0,5)
			};
		case getReducersList().SUCCESS_TRANSLATE:
			let successArray = store.getState().wordsPart.successTranslateArray;
			console.log(store.getState());
			successArray[action.counter] = true;
			return {
				...state,
				successTranslateArray: successArray
			};
		case getReducersList().FAILED_TRANSLATE:
			let failedArray = [...state.successTranslateArray];
			failedArray[action.counter] = false;
			return {
				...state,
				successTranslateArray: failedArray
			};
		case getReducersList().CLEAR_TRANSLATE:
			return {
				...state,
				successTranslateArray: Array.from(Array(5), () => 0)
			};
		default:
			return {...state}
	}
}