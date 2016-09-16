import { combineReducers } from 'redux';
import SearchResultsReducer from './searchResults';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  results: SearchResultsReducer
});

export default rootReducer;
