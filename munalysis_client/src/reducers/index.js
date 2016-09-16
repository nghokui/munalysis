import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication';
import SearchResultsReducer from './searchResults';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  authenticated: AuthenticationReducer,
  results: SearchResultsReducer
});

export default rootReducer;
