import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import { asyncArtist, asyncAlbum, asyncTrack } from './middleware/async';

const mw = [asyncArtist, asyncAlbum, asyncTrack]
const createStoreWithMiddleware = applyMiddleware(...mw)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
