/**
 * Created by user on 29.08.2016.
 */
import {getReducersList} from '../actions/actions';
import jsonp from 'jsonp';
import compare from '../services/compareWords';


function isPositiveAnswers(number) {
	return (number === true && number !== 0);
}

const getWordTranslateMiddleWare = store => next => {
	return action => {
		switch (action.type) {
			case getReducersList().CHECK_TRANSLATE:
				let promise = new Promise(function (resolve, reject) {
					jsonp(`https://glosbe.com/gapi/translate?from=eng&dest=rus&format=json&phrase=${action.value.defaultWord}&pretty=true&pageSize=1`, fn);
					function fn(error, data) {
						resolve(data);
						reject(error);
					}
				});
				promise.then(
					data => {
						store.dispatch({
							type: compare(action.value.userWord, data) ? getReducersList().SUCCESS_TRANSLATE : getReducersList().FAILED_TRANSLATE,
							counter: action.value.counter
						});
						console.log(store.getState().wordsPart.successTranslateArray);
						store.dispatch({
							type: getReducersList().CHECK_ANSWERS,
							value: store.getState().wordsPart.successTranslateArray.every(isPositiveAnswers)
						});
					}, error => {
						throw Error(error);
					}
				);

				return next(action);
			default:
				return next(action);
		}
	};
};

export default getWordTranslateMiddleWare;

/* как лучше описать - вначале вызывать reject а потом resolve внутри cb функции или все равно? */

/* нужно ли было делать hoc для компонента для проверки слова в функции compare? */