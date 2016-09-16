import { something } from '../actions/index';
import { FETCH_API_DATA } from '../actions/constants';

export default function(state=[], action) {
	switch (action.type) {
		case FETCH_API_DATA: 
			return [ ...action.payload ];
	}
	return state;
}

