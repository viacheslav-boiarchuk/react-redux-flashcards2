/**
 * Created by user on 10.12.2016.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger';
import wordReducer from '../reducers/wordReducer';
import popupReducer from '../reducers/popupReducer';
import getWordsMiddleWare from '../middlewares/getWordsMiddleWare';
import getWordTranslateMiddleWare from '../middlewares/getWordTranslateMiddleWare';

const reducer = combineReducers({
	wordsPart: wordReducer,
	popupPart: popupReducer
});

const store = createStore(reducer, applyMiddleware(getWordsMiddleWare, getWordTranslateMiddleWare, loggerMiddleware()));

export  default store;