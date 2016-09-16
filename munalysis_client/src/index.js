import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppHolder from './containers/appHolder';

import reducers from './reducers';

// import * as amw from './middleware/async';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<AppHolder />
  </Provider>
  , document.querySelector('.container'));
