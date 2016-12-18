/**
 * Created by user on 10.12.2016.
 */
export function getReducersList() {
	const GET_WORD_LIST = 'get-word-list';
	const SAVE_WORDS = 'save-words';
	const CHECK_TRANSLATE = 'check-translate';
	const SUCCESS_TRANSLATE = 'success-translate';
	const FAILED_TRANSLATE = 'failed-translate';
	const CLEAR_TRANSLATE = 'clear-translate';
	const CHECK_ANSWERS = 'check-answers';
	const CHANGE_POPUP_ACTIVITY = 'change-popup-activity';

	return {
		GET_WORD_LIST: GET_WORD_LIST,
		SAVE_WORDS: SAVE_WORDS,
		CHECK_TRANSLATE: CHECK_TRANSLATE,
		SUCCESS_TRANSLATE: SUCCESS_TRANSLATE,
		FAILED_TRANSLATE: FAILED_TRANSLATE,
		CLEAR_TRANSLATE: CLEAR_TRANSLATE,
		CHECK_ANSWERS: CHECK_ANSWERS,
		CHANGE_POPUP_ACTIVITY: CHANGE_POPUP_ACTIVITY,
	}
}

export function getWordsList(){
	return {
		type: getReducersList().GET_WORD_LIST
	}
}

export function clearTranslateArray(){
	return {
		type: getReducersList().CLEAR_TRANSLATE
	}
}

export function togglePopupActivity(){
	return {
		type: getReducersList().CHANGE_POPUP_ACTIVITY
	}
}

export function checkTranslate(defaultWord, userWord, counter){
	return {
		type: getReducersList().CHECK_TRANSLATE,
		value: {
			defaultWord,
			userWord,
			counter
		}
	}
}