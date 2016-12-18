/**
 * Created by user on 29.08.2016.
 */
import {getReducersList} from '../actions/actions';

const getWordsMiddleWare = store => next => {
	return action => {
		switch (action.type) {
			case getReducersList().GET_WORD_LIST:
				fetch('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5').then(data => data.json()).then(
						data => {
							store.dispatch({
								type: getReducersList().SAVE_WORDS,
								data: data
							})
						},
						error => {
							console.log(error);
						}
				);
				return next(action);
			default:
				return next(action);
		}
	};
};

export default getWordsMiddleWare;