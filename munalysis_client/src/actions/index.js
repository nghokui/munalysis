import axios from 'axios';
import * as acConstants from './constants';

const ROOT_URL = 'https://api.spotify.com/v1/search';

export const checkAuthenticationStatus = () => {
	const url = '/api/auth/status/';
	const request = axios.get(url);
	
}

export const fetchByArtist = (inArtist) => {
	console.log("Artist query", inArtist);
	const url = `${ROOT_URL}?q=${inArtist.replace(" ", '%20')}&type=artist`;
	const request = axios.get(url);

	return {
		type: acConstants.FETCH_BY_ARTIST,
		payload: request
	};
}
export function fetchByAlbum(inAlbum){
	console.log("Album query", inAlbum);
	const url = `${ROOT_URL}?q=${inAlbum.replace(" ", '%20')}&type=album`;
	const request = axios.get(url);

	return {
		type: acConstants.FETCH_BY_ALBUM,
		payload: request
	};
}
export function fetchByTrack(inTrack){
	console.log("Track query", inTrack);
	const url = `${ROOT_URL}?q=${inTrack.replace(" ", '%20')}&type=track`;
	const request = axios.get(url);

	return {
		type: acConstants.FETCH_BY_TRACK,
		payload: request
	}
}