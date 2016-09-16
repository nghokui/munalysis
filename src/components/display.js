import React, { Component } from 'react';
import Munode from './munode';
import { THE_MOTHER_WE_SHARE } from '../data/chvrches';
import { processTrackData } from '../misc/pprocessor';
import { trackPropOrder } from '../misc/trackPropOrder';

export default class Musplay extends Component {
  render() {
    const trackData = processTrackData(THE_MOTHER_WE_SHARE);
    const orderedTrackData = trackPropOrder.map((trackProp) => {
      return trackData[trackProp];
    });
    return (
      <svg height={this.props.cHeight} width={this.props.cWidth}>
        <Munode mdata={orderedTrackData.join(' ')} centerX={120} centerY={120} radius={100} />
      </svg>
    );
  }
}
