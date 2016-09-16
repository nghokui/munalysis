import * as ac from '../actions/constants';

export function asyncArtist({ dispatch }) {
	return next => action => {
		// if the action does not have a payload or the payload does not have a
		// .then property, we don't care about it, send it on
		const typeMatch = (action.type!=ac.FETCH_BY_ARTIST);
		if (!action.payload || !action.payload.then || typeMatch) {
			return next(action);
		}
		console.log(action, action.type);

		// make sure the action's promise resolves
		action.payload
			.then(function(response) {
				// take the type from the action, but overwrite the payload
				// PROCESS THE RESPONSE DATA
				console.log("In artist mw, making changes", action);
				const newAction = { ...action, payload: response };
				// take this action, send it through the top-level middleware again!
				dispatch(newAction); 
			});
	}
}

export function asyncAlbum({ dispatch }) {
	return next => action => {
		// if the action does not have a payload or the payload does not have a
		// .then property, we don't care about it, send it on
		const typeMatch = (action.type!=ac.FETCH_BY_ALBUM);
		if (!action.payload || !action.payload.then || typeMatch) {
			return next(action);
		}

		// make sure the action's promise resolves
		action.payload
			.then(function(response) {
				// take the type from the action, but overwrite the payload
				const newAction = { ...action, payload: response };
				console.log("In ALBUM mw, making changes", action);
				// console.log(newAction);
				// take this action, send it through the top-level middleware again!
				dispatch(newAction); 
			});
	}
}

export function asyncTrack({ dispatch }) {
	return next => action => {
		// if the action does not have a payload or the payload does not have a
		// .then property, we don't care about it, send it on
		const typeMatch = (action.type==ac.FETCH_BY_TRACK);
		if (!action.payload || !action.payload.then || !typeMatch) {
			return next(action);
		}

		// make sure the action's promise resolves
		action.payload
			.then(function(response) {
				// take the type from the action, but overwrite the payload
				console.log("In TRACK mw, making changes", action, typeMatch);
				const newAction = { ...action, payload: response };
				// console.log(newAction);
				// take this action, send it through the top-level middleware again!
				dispatch(newAction); 
			});
	}
}