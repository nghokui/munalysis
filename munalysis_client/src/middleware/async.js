import axios from 'axios';
import * as ac from '../actions/constants';

const TRACK_MAX = 50;
const REPLACE_STR = '~~~';
const TOP_TRACKS_URL = 'https://api.spotify.com/v1/artists/~~~/top-tracks?country=US';

export function asyncArtist({ dispatch }) {
	return next => action => {
		// if the action does not have a payload or the payload does not have a
		// .then property, we don't care about it, send it on
		const typeMatch = (action.type!=ac.FETCH_BY_ARTIST);
		console.log(action, action.type);
		if (!action.payload || !action.payload.then || typeMatch) {
			return next(action);
		}
		console.log(action, action.type);

		// make sure the action's promise resolves
		action.payload
			.then(function(response) {
				// take the type from the action, but overwrite the payload
				// PROCESS THE RESPONSE DATA
				console.log("In artist mw, making changes", response.data);
				const artistURI = response.data.artists.items[0].id;
				const topTracksCall = TOP_TRACKS_URL.replace("~~~", artistURI);
				const topTracksRequest = axios.get(topTracksCall);

				const newAction = { 
					type: ac.FETCH_BY_TOP_TRACKS, 
					payload: topTracksRequest 
				};

				// take this action, send it through the top-level middleware again!
				dispatch(newAction); 
			});
	}
}
export function asyncArtistTopTracks({ dispatch }) {
	return next => action => {
		// if the action does not have a payload or the payload does not have a
		// .then property, we don't care about it, send it on
		const typeMatch = (action.type!=ac.FETCH_BY_TOP_TRACKS);
		if (!action.payload || !action.payload.then || typeMatch) {
			return next(action);
		}

		// make sure the action's promise resolves
		action.payload
			.then(function(response) {
				// take the type from the action, but overwrite the payload
				const newAction = { ...action, payload: response };
				console.log("In TOP TRACKS mw, making changes", response);
				var counter = 0;
				const trackIDList = response.data.tracks.map((albumTrack) => {
					counter = counter + 1;
					return albumTrack.id;
				});
				console.log('Total IDs', counter);
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