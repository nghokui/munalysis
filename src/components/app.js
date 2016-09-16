import React, { Component } from 'react';
import Musplay from './display';
import Selector from '../containers/trackSelector';

export default class App extends Component {
  render() {
    return (
      <div><Selector /></div>
    );
  }
}

//<Musplay cHeight={500} cWidth={500} />
