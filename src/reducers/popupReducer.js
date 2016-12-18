/**
 * Created by user on 10.12.2016.
 */
import {getReducersList} from '../actions/actions';

const initialState = {
	popupActivity: false
};

export default function(state = initialState ,action){
	switch (action.type) {
		case getReducersList().CHECK_ANSWERS:
			return {
				...state,
				popupActivity: action.value
			};
		case getReducersList().CHANGE_POPUP_ACTIVITY:
			return {
				...state,
				popupActivity: false
			};
		default:
			return {...state}
	}
}